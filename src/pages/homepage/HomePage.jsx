import { useState, useEffect} from 'react'
import Card from '../../components/card/Card';
import { CardService } from '../../services/Cards-Service';
import CardDashboard from '../../components/card-dashboard/Card-dashboard';

function HomePage() {
  const [cards, setCards] = useState([]);
    const cardService = CardService();
    
    useEffect(() => {
        cardService.getAll()
           
            .then (function (response){
                //console.log(response);
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

<CardDashboard/>

{/*
<div className="container-cards-grid">
         {cards.map((card) => (
            <Card
            key={card.id}
            id= {card.id}
            title = {card.title}
            location = {card.location}
            image= {card.image} />
         ))}
            {<button onClick={handleAdd}>Agregar</button>}
         </div>*/}
    </>
  )
}

export default HomePage