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
        cardService.getAll()
            .then (response => {
                setDestination(response.data[id]);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

  return (
    <div>
        <img src={destination.image} alt={destination.title}/>

        <div>
            <div>
                <div>
                    <h2>{destination.title}</h2>
                    <p>{destination.location}</p>
                </div>
                
                <div>
                    <button><img src={EditIcon} alt='Edit icon'/></button>

                    <button><img src={DeleteIcon} alt='Delete icon'/></button>
                </div>
            </div>
            
            <p>{destination.description}</p>
        </div>
    </div>
  );
}

export default Detail;