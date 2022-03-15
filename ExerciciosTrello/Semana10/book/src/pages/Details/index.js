import React,{useEffect, useState, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { DivConteudo, Container, Image, DivDescription, BookName, BookPrice, BookDescription, ItemButton } from './styles';
import { CartContext } from '../../contexts/Cart';

const arrayVazio = {id: 0, title: '', price: 0, image: '', description: ''}

function Details() {

  const params = useParams();

  const [details, setDetails] = useState([arrayVazio]);
  
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    async function handleGetBooks() {
      let response = await fetch(`http://localhost:3333/books?id=${params.idBook}`)      
      let data = await response.json();
      setDetails(data);
    }

    handleGetBooks()
  }, [params.idBook]);
 
  return (
    
    <Container>
      <DivConteudo>
        <Image src={details[0].image} />
        <DivDescription>
          <BookName>{details[0].title}</BookName>
          <BookPrice>{
              new Intl.NumberFormat(
                'pt-BR',
                { style: 'currency', currency: 'BRL' }
              ).format(details[0].price)
            }</BookPrice>
          <BookDescription>{details[0].description}</BookDescription>          
          <ItemButton onClick={() => {addItem(details[0])}}>Adicionar ao carrinho</ItemButton>
        </DivDescription>
      </DivConteudo>
    </Container>
  )
}

export default Details;