import React from 'react';
import {ItemCard, ItemCardPhoto, ItemCardName, ItemCardPrice} from './styles.js';

function Card({ data }) {
  return (
    <ItemCard>
      <ItemCardPhoto src='https://images-na.ssl-images-amazon.com/images/I/51DaS6hNpPL._SY344_BO1,204,203,200_QL70_ML2_.jpg'></ItemCardPhoto>
      <ItemCardName>Teste</ItemCardName>
      <ItemCardPrice>R$9.99</ItemCardPrice>
    </ItemCard>
    );
}

export default Card;