import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardService } from '../../services/Cards-Service';
import EditIcon from '../../assets/Edit-icon.svg';
import DeleteIcon from '../../assets/Delete-icon.svg';
import './Detail.css';

function Detail() {
    const {id} = useParams();
    const [destination, setDestination] = useState([id]);
    const cardService = CardService();
    
    useEffect(() => {
        cardService.getById(24)
            .then (response => {
                setDestination(response.data);
                console.log(destination)
                console.log(destination.image)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);

  return (
    <div className='detail-container'>
        <img src= {destination.image} alt={destination.title} className='detail-img'/>

        <div className='detail-info'>
            <div className='detail-info-first-container'>
                <div>
                    <h2>{destination.title}</h2>
                    <p>{destination.location}</p>
                </div>
                
                <div className='detail-info-btns'>
                    <button><img src={EditIcon} alt='Edit icon'/></button>

                    <button><img src={DeleteIcon} alt='Delete icon'/></button>
                </div>
            </div>
            
            <p className='detail-description'>{destination.description}</p>
        </div>
    </div>
  );
}

export default Detail;