import React from 'react';
import './Card.css';

function Card(props) {
  return (
              <div>
                <div key={props.id} className='container-card'>
                    <div className='container-image'>
                    <img className = 'api-image' src = {props.image} alt='fotografía recibida de la API'></img>
                  </div>
                  <div className='text-container'>
                            <p className='text-title'>{props.title}</p>
                            <p className='text-location'>{props.location}</p>
                  </div>
                  
                </div>
      </div>
    )
}
export default Card