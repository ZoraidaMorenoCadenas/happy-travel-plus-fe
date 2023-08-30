import { useState, useEffect} from 'react';
import Card from '../card/Card';
import { CardService } from '../../services/Cards-Service';

function CardDashboard() {
  const [cards, setCards] = useState([]);
    const cardService = CardService();
    
    useEffect(() => {
        cardService.getAll()
           
            .then (function (response){
                console.log(response);
                setCards(response.data);
            })
            .catch(function (error) {
            console.log(error);
            })
            .finally(function () {
            });
        // El código aquí se ejecutará después de *cada* renderizado
    }, []);

  return (
    <>

<div className="grid-container">

         {cards.map((card) => (
            <Card
            key={card.id}
            id= {card.id}
            title = {card.title}
            location = {card.location}
            image= {card.image} />
         ))}
            {/*<button onClick={handleAdd}>Agregar</button>*/}
         </div>
     
    </>
  )
}

export default CardDashboard
