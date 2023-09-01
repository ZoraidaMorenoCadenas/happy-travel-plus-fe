import React, { useState } from 'react';

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
    <div>
      <h3>Crear destino</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div>git
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Escribe el título..."
          />
          <p className="error">{errors.title}</p>
        </div>

        <div>
          <label htmlFor="location">Ubicación</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Escribe la ubicación..."
          />
          <p className="error">{errors.location}</p>
        </div>

        <div>
          <label htmlFor="image">Imagen</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleInputChange}
          />
          <p className="error">{errors.image}</p>
        </div>

        <div>
          <label>¿Por qué quieres viajar allí?</label>
          <textarea
            rows="12"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Escribe una descripción..."
          />
          <p className="error">{errors.description}</p>
        </div>

        <button type="submit">Aceptar</button>
        <button>
          <a href="/dashboard">Cancelar</a>
        </button>
      </form>
    </div>
  );
}

export default DestinationForm;
