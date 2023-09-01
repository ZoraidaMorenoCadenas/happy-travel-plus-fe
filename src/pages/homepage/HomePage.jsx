
import {React, useState, useEffect} from 'react'
import { CardService } from '../../services/Cards-Service';
import "./cards.css";



export default function HomePage() {

  const [destinations, setDestinations] = useState([]);
  {/*const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);*/}
  const cardDestinationService = CardService();
 
useEffect(() => {
    // Make sure CardService is properly implemented and returns a promise
    cardDestinationService.getAll()
      .then(function (response) {
        console.log(response);
        setDestinations(response.data[0]); // Assuming your API response is an array
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
          <img className="card-img-top" src={`http://127.0.0.1:8000/storage/${destination.image}`} alt="Card" />
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








