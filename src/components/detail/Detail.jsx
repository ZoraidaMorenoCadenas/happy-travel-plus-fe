import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardService } from '../../services/Cards-Service';
import EditIcon from '../../assets/Edit-icon.svg';
import DeleteIcon from '../../assets/Delete-icon.svg';
import './Detail.css';
import { Link } from 'react-router-dom';


function Detail() {
    const {id} = useParams();
    const [destination, setDestination] = useState({});
    const cardService = CardService();

    useEffect(() => {
        // cardService.getAll()
        cardService.getById(id)
            .then (response => {
                setDestination(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);

  return (
    <div className='detail-container'>
      {destination?.image && <img src={`http://127.0.0.1:8000/storage/${destination.image}`} alt={destination.title} className='detail-img'/>}

        <div className='detail-info'>
            <div className='detail-info-first-container'>
                <div>
                    <h2>{destination.title}</h2>
                    <p>{destination.location}</p>
                </div>
                
                <div className='detail-info-btns'>
                        <Link to={`../${id}/edit`}>
                            <button>
                            <img src={EditIcon} alt='Edit icon'/>
                            </button>
                        </Link>

                    <button><img src={DeleteIcon} alt='Delete icon'/></button>
                </div>
            </div>
            
            <p className='detail-description'>{destination.description}</p>
        </div>
    </div>
  );
}

export default Detail;