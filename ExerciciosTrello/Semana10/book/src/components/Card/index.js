import React from 'react';
import {ItemCard, ItemCardPhoto, ItemCardName, ItemCardPrice, ItemButton} from './styles.js';
import { Link } from 'react-router-dom';
function Card({ data }) {
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
      <ItemButton>Comprar</ItemButton>
      <ItemButton><Link to={`/details/${data.id}`} className='buttons-cart'>Detalhes</Link></ItemButton>
    </ItemCard>
    );
}

export default Card;