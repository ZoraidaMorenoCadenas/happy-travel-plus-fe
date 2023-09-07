import React, { useState, useEffect } from 'react';
import "./FormEdit.css";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';


export default function FormEdit() {
    const { id } = useParams();
    const [name, setTitle] = useState('');
    const [location, setLocation ] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage ] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
  console.log(id)

    useEffect(() => {
        const travelDetail = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/destinations/${id}`);
                const details = response.data;
                setTitle(details.name);
                setLocation(details.location);
                setDescription(details.description);
                
            } catch(error) {
                console.error(error);
            }
        };

        travelDetail();
    }, [id]);

    const handleImageUpload = (e) => {
      const selectedImage = e.target.files[0];
      if (selectedImage) {
        const reader = new FileReader();
    
        reader.onload = (e) => {
          setImagePreview(e.target.result); // Actualiza la vista previa de la imagen
        };
    
        reader.readAsDataURL(selectedImage);
      }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('title', title);
        formData.append('location', location);
        formData.append('description', description);

        if (image) {
          formData.append('image', image);
        }

        try {
            const response = await axios.put(`http://localhost:8000/api/destinations/${id}`, formData, {
                withCredentials: true,
                headers: {
                  "Content-Type": "multipart/form-data", 
                  "Accept": "application/json",
                },
              });
              console.log('Response:', response.data);
              
              setTitle('');
              setLocation('');
              setDescription('');
              setImagePreviw(null);
             
            } catch (error) {
              console.error('Error:', error);
            }
          };
    
          return (
            <form className="edit-container-form" onSubmit={handleSubmit}>
              <div className="edit-box-line"><h3>Editar destino</h3></div>
              <div className="edit-form-create">
                <div className="edit-box1">
                  <div className="edit-input-container">
                    <label htmlFor="title">Título</label>
                    <input id="title" className="edit-form-control" placeholder='Escribe un título' value={name} onChange={(e) => setTitle(e.target.value)} />
                    <p id="error-title" className="error"></p>
                  </div>
                  <div className="edit-label-input-container">
                    <label htmlFor="location">Ubicación</label>
                    <input id="location" className="edit-form-control" type="text" placeholder='Escribe una ubicación' value={location} onChange={(e) => setLocation(e.target.value)} />
                    <p id="error-location" className="error"></p>
                  </div>
                  <div className="edit-label-input-container">
                    <label  htmlFor="image">Imagen</label>
                    <input id="image" className="edit-form-control" placeholder='Sube una foto' type="file" value={image} onChange={(e) => handleImageUpload(e)} />
                    <p id="error-image" className="error"></p>
                  </div>                                                                 
                  
                </div>
                <div className="edit-box2">
                  <div className='edit-input-container'>
                  <label>¿Por qué quieres viajar allí?</label>
                  <p id="error-description" className="error"></p>
                  <textarea name="description" className="edit-custom-textarea" id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                </div>
              </div>
              <div className="edit-btn-container">
                <Link to="/">
                    <button className="edit-btn-primary" type="submit">Aceptar</button>
                </Link>
                <button className="edit-btn-secondary">Cancelar</button>
              </div>
            </form>
          );
        }

