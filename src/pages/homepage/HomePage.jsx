
import {React, useState, useEffect} from 'react'
import Card from '../../components/card/Card';
import { CardService } from '../../services/Cards-Service';
//import { fetchCards } from '../../services/Cards-Service';
import { Link } from 'react-router-dom';
import "./cards.css";


// import editIcon from '../assets/edit-icon.svg';
// import deleteIcon from '../assets/delete-icon.svg';
// import infoIcon from '../assets/Info.svg';

export default function HomePage() {

  const [destinations, setDestinations] = useState([]);
  {/*const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);*/}

  const cardDestinationService = CardService();

 
useEffect(() => {
    
    // Make sure CardService is properly implemented and returns a promise
    cardDestinationService.getAll()
      .then(function (response) {
        console.log(response);
        setDestinations(response.data); // Assuming your API response is an array
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

{/*cardDestinationService.getAll()*/}

  return (

   <div> 
      
      {destinations.map((destination) => (
    <div key = {destination.id} className="cards" style={{ width: '18.75rem', height: '25rem' }}>
          <img className="card-img-top" src={`http://127.0.0.1:8000/${destination.image}`} alt="Card" />
    <div className='date-cards'>
   <div  className="card-body">
    <h5 className="card-title">Título:{destination.title}</h5>
    <p className="card-text">Lugar:{destination.location}</p>
  </div>
</div>
</div>

))}

</div>
  )
}








