import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CardService } from '../../services/Cards-Service';
import "./FormEdit.css";


export default function FormEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [destination, setDestination] = useState({ title: '', location: '', description: '' });
  const [image, setImage] = useState(null);
  const { title, location, description } = destination;
  const cardService = CardService();

  useEffect(() => {
    cardService.getById(id)
        .then (response => {
            setDestination(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
  }, []);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setDestination(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setImage(selectedImage)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...destination,
      image,
    }

    cardService.postDestination(id, data)
      .then(() => navigate('/'))
      .catch((e) => console.error(e))
  };
  
  return (
    <form className="edit-container-form" onSubmit={handleSubmit}>
      <div className="edit-box-line"><h3>Editar destino</h3></div>
      <div className="edit-form-create">
        <div className="edit-box1">
          <div className="edit-input-container">
            <label htmlFor="title">Título</label>
            <input id="title" className="edit-form-control" placeholder='Escribe un título' name="title" value={title} onChange={onInputChange} />
            <p id="error-title" className="error"></p>
          </div>
          <div className="edit-label-input-container">
            <label htmlFor="location">Ubicación</label>
            <input id="location" className="edit-form-control" type="text" placeholder='Escribe una ubicación' name="location" value={location} onChange={onInputChange} />
            <p id="error-location" className="error"></p>
          </div>
          <div className="edit-label-input-container">
            <label  htmlFor="image">Imagen</label>
            <input id="image" className="edit-form-control" placeholder='Sube una foto' type="file" onChange={handleImageUpload} />
            <p id="error-image" className="error"></p>
          </div>                                                                 
        </div>
        <div className="edit-box2">
          <div className='edit-input-container'>
          <label>¿Por qué quieres viajar allí?</label>
          <p id="error-description" className="error"></p>
          <textarea name="description" className="edit-custom-textarea" id="description" value={description} onChange={onInputChange}></textarea>
        </div>
        </div>
      </div>
      <div className="edit-btn-container">
        <button className="edit-btn-primary" type="submit">Aceptar</button>
        <button className="edit-btn-secondary">Cancelar</button>
      </div>
    </form>
  );
}

