import React from 'react';
import { Container, Resultado, Titulo, Numeros} from './styles';
function Resultado() {
  return <Container>
      <Resultado>
        <div><Titulo>Resultado</Titulo></div>
        <div>
          <span>Acumulou!</span>
          <span>Sorteio realizado</span>
          <div>
            <Numeros>03</Numeros>
            <Numeros>20</Numeros>
            <Numeros>22</Numeros>
            <Numeros>32</Numeros>
            <Numeros>35</Numeros>
            <Numeros>50</Numeros>
          </div>
        </div>
      </Resultado>
  </Container>;

}

export default Resultado;