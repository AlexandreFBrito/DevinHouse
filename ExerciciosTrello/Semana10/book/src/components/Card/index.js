import React,{useContext} from 'react';
import {ItemCard, ItemCardPhoto, ItemCardName, ItemCardPrice, ItemButton} from './styles.js';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/Cart';
function Card({ data }) {

  const { addItem } = useContext(CartContext);

  return (
    <ItemCard>
      <ItemCardPhoto src={data.image}></ItemCardPhoto>
      <ItemCardName>{data.title}</ItemCardName>
      <ItemCardPrice>{
              new Intl.NumberFormat(
                'pt-BR',
                { style: 'currency', currency: 'BRL' }
              ).format(data.price)
            }</ItemCardPrice>
      <ItemButton onClick={() => {addItem(data)}}>Comprar</ItemButton>
      <ItemButton><Link to={`/details/${data.id}`} className='buttons-cart'>Detalhes</Link></ItemButton>
    </ItemCard>
    );
}

export default Card;