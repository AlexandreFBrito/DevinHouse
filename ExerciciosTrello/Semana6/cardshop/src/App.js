import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [cards, setCards] = useState([]);

  useEffect(() =>{
    
    async function handleGetCard(){
    const response = await fetch('http://localhost:3333/cards?_limit=20');
    const data = await response.json();
    setCards(data);
    }

    handleGetCard();

  }, []);

  return (
    <div >
      <h1>Total de cards {cards.length}</h1>
      <div class='container'>
      {
        cards.map((card) => (
          <div className='item-card'>
            <img className='item-card-photo' src={card.card_images[0].image_url_small} 
            alt={card.name} />

            <span className='item-card-name'>{card.name}</span>
            <span>{card.type}</span>
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default App;
