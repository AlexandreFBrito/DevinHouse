import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import { ContainerResult, Resultados, Titulo, Titulo1, Titulo3, DivTitulo, DataSort} from './styles';
import Numeros from '../../components/Numeros';

function Resultado() {
    
  const params = useParams();
  const [jogo, setJogo] = useState([]);
  let dezenas = [];

  useEffect(() => {
    async function handleGetJogo() {
      let response = await fetch(`https://loteriascaixa-api.herokuapp.com/api/${params.jogo}/latest`)      
      let data = await response.json();
      setJogo(data);
    }

    handleGetJogo()
  }, []);
    dezenas = jogo.dezenas;
    console.log(jogo);
  return (    
  <ContainerResult>
         <DivTitulo><Titulo>Resultado</Titulo><DataSort>Concurso {jogo.concurso} ({jogo.data})</DataSort></DivTitulo>
          {jogo.acumulou ? <><Titulo1>Acumulou!</Titulo1> <Titulo3>Estimativa de prêmio: {jogo.acumuladaProxConcurso}</Titulo3></>: ""}
          <Titulo3>Sorteio realizado {jogo.local}</Titulo3>
      <Resultados>
      
      {dezenas?.map(numeros => <Numeros data={numeros} />)}
      </Resultados>
  </ContainerResult>
  );
  }

export default Resultado;