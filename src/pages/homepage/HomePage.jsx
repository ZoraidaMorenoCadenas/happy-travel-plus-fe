import { useState, useEffect} from 'react'
import Card from '../../components/card/Card';
import { CardService } from '../../services/Cards-Service';
import { Link } from 'react-router-dom';

function HomePage() {
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

<div className="container-cards-grid">
         {cards.map((card, i) => (
          <Link to={`/detail/${i}`} key={i}>
            <Card
            id= {card.id}
            title = {card.title}
            location = {card.location}
            image= {card.image} />
          </Link>
         ))}
            {/*<button onClick={handleAdd}>Agregar</button>*/}
         </div>
      <h1>HOLA</h1>




    </>
  )
}

export default HomePage
