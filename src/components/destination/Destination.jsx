import React, { useState  } from 'react';
import './Destination.css';
import FileIcon from '../../assets/File-icon.svg';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

function DestinationForm() {

  const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [redirectToDashboard, setRedirectToDashboard] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
    console.log("holaaa")
      const formData = new FormData();
      formData.append('title', title);
      formData.append('location', location);
      formData.append('image', image);
      formData.append('description', description);
    
      try {
        const response = axios.post('http://localhost:8000/api/destinations', formData, {
          
          headers: {
            "Content-Type": "multipart/form-data", 
            "Accept": "application/json",
          },
        });
        console.log('Response:', response.data);
    
        setTitle('');
        setLocation('');
        setDescription('');
        setImage(null);
        setRedirectToDashboard(true);
        
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    if (redirectToDashboard) {
      return <Navigate to="/" />;
  }


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
              
              value={title} onChange={(e) => setTitle(e.target.value)}
              
              placeholder="Escribe el título..."
              required
            />
           
          </div>
  
          <div className='cd-form-location-container'>
            <label htmlFor="location" className='cd-form-label cd-form-title'>Ubicación</label>
            <input
            className="cd-form-input" 
            type="text"
            id="location"
            value={location} onChange={(e) => setLocation(e.target.value)}
            
            placeholder="Escribe la ubicación..."
            required
            />
            
          </div>

          <div className='cd-form-img-container'>
            <label htmlFor="image" className='cd-form-title'>Imagen</label>
            
            <div className='cd-form-img-subcontainer'>
              <label className="cd-form-rounded-start-modif" for="image">
                <img src={FileIcon} alt="File Icon"/>
              </label>
              
              <label className="cd-form-rounded-end-modif">
                <input
                type="file" onChange={(e) => setImage(e.target.files[0])}
                
                required
                className="cd-form-img" 
                />
                Sube una imagen...
              </label>
            
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
          value={description} onChange={(e) => setDescription(e.target.value)}
          
          placeholder="Escribe una descripción..."
          required
          />
        
        </div>
      </form>
    </div>
  );
}

export default DestinationForm;
