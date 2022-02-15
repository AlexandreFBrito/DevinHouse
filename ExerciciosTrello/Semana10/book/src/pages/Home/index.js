import React,{useEffect, useState} from 'react';
import Card from '../../components/Card';
import Container from '../../components/Container';


function Home() {

  const [books, setbooks] = useState([])

  useEffect(() => {
    async function handleGetCard() {
      const response = await fetch(
        `http://localhost:3333/books`
      )
      const data = await response.json()
      setbooks(data)
    }
    handleGetCard();
    
  }, []);

  return (
    <Container>
      {books.map(items => 
      <Card 
        key={items.id}  
        data={items}
          />
      )}
    </Container>

  );
}

export default Home;