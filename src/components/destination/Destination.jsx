import React, { useState } from 'react';
import './Destination.css';
import FileIcon from '../../assets/File-icon.svg';
import { Link } from 'react-router-dom';

function DestinationForm() {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    image: null,
    description: '',
  });

  const [errors, setErrors] = useState({
    title: '',
    location: '',
    image: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      title: '',
      location: '',
      image: '',
      description: '',
    };

    if (formData.title.trim() === '') {
      newErrors.title = 'Título requerido';
      valid = false;
    }

    if (formData.location.trim() === '') {
      newErrors.location = 'Ubicación requerida';
      valid = false;
    }

    if (!formData.image) {
      newErrors.image = 'Imagen requerida';
      valid = false;
    }

    if (formData.description.trim() === '') {
      newErrors.description = 'Descripción requerida';
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Aquí puedes enviar los datos del formulario al servidor
      // Por ejemplo, puedes usar fetch() o Axios para hacer una solicitud POST
      // con los datos de formData al backend.
      // También puedes mostrar una notificación de éxito o redirigir al usuario después de la creación exitosa.
      console.log('Formulario válido. Enviar datos al servidor:', formData);
    }
  };

  return (
    <div className='create-destination-container'>
      <h3>Crear destino</h3>

      <form className="create-destination-form" onSubmit={handleSubmit}>
        <div className='cd-form-first-container'>
          <div className='cd-form-title-container'>
            <label htmlFor="title" className='cd-form-label cd-form-title'>Título</label>
            <input
              className="cd-form-input" 
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Escribe el título..."
              required
            />
            <p className="error">{errors.title}</p>
          </div>
  
          <div className='cd-form-location-container'>
            <label htmlFor="location" className='cd-form-label cd-form-title'>Ubicación</label>
            <input
            className="cd-form-input" 
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Escribe la ubicación..."
            required
            />
            <p className="error">{errors.location}</p>
          </div>

          <div className='cd-form-img-container'>
            <label htmlFor="image" className='cd-form-title'>Imagen</label>
            
            <div className='cd-form-img-subcontainer'>
              <label className="cd-form-rounded-start-modif" for="image">
                <img src={FileIcon} alt="File Icon"/>
              </label>
              
              <label className="cd-form-rounded-end-modif">
                <input
                type="file"
                id="image"
                name="image"
                onChange={handleInputChange}
                required
                className="cd-form-img" 
                />
                Sube una imagen...
              </label>
            <p className="error">{errors.image}</p>
          </div>
          
          <section className='cd-form-btns'>
            <button type="submit" id="btn-accept">Aceptar</button>

             <Link to="/"><button id="btn-cancel">
             Cancelar</button></Link>
          </section>
        </div>
               
      </div>
        
        <div className='cd-form-second-container'> 
          <label className='cd-form-label cd-form-title'>¿Por qué quieres viajar allí?</label>
            
          <textarea
          rows="12"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Escribe una descripción..."
          required
          />
          <p className="error">{errors.description}</p>
        </div>
      </form>
    </div>
  );
}

export default DestinationForm;
