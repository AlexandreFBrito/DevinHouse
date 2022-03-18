import React from 'react';
import { DivNumeros, Result } from './styles';

function Numeros({data}) {
  return (
    <DivNumeros >
        <Result >{data}</Result>
    </DivNumeros>
  );
}

export default Numeros;