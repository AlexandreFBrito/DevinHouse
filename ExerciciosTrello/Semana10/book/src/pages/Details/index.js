import React from 'react';
import { DivConteudo, Container, Image, DivDescription, BookName, BookPrice, BookDescription, ItemButton } from './styles';


function Details() {
  return (
    <Container>
      <DivConteudo>
        <Image src='https://cdn.shopify.com/s/files/1/0155/7645/products/OretornodocangaceiroJavaScript_ebook_large.jpg?v=1631654115' />
        <DivDescription>
          <BookName>Cangaceiro JavaScript</BookName>
          <BookPrice>R$90.99</BookPrice>
          <BookDescription>O paradigma funcional está cada vez mais presente em frameworks modernos. E com o JavaScript em constante evolução, os desenvolvedores cangaceiros estão sempre aprendendo novas formas de aprimorar a manutenção e legibilidade de seus códigos, armando-se de conceitos e técnicas para se aventurar em terras ainda mais avançadas e frameworks que possuem grande demanda no atual mercado de trabalho.O paradigma funcional está cada vez mais presente em frameworks modernos. E com o JavaScript em constante evolução, os desenvolvedores cangaceiros estão sempre aprendendo novas formas de aprimorar a manutenção e legibilidade de seus códigos, armando-se de conceitos e técnicas para se aventurar em terras ainda mais avançadas e frameworks que possuem grande demanda no atual mercado de trabalho.</BookDescription>          
          <ItemButton>Adicionar ao carrinho</ItemButton>
        </DivDescription>
      </DivConteudo>
    </Container>
  )
}

export default Details;