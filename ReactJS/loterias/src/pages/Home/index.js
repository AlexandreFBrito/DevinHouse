import React from 'react';
import { Link } from 'react-router-dom';
import { CategoryItem, ContainerJogos } from './styles';
import Container from '../../components/Container';
import logoMegasena from "../../assets/mega-sena.png";
import logolotofacil from "../../assets/lotofacil.png";
import logoquina from "../../assets/quina.png";
import logolotomania from "../../assets/lotomania.png";
import logotimemania from "../../assets/timemania.png";
import logoduplasena from "../../assets/dupla-sena.png";
import logoloteriafederal from "../../assets/federal.png";
import logodiadesorte from "../../assets/dia-de-sorte.png";
import logosupersete from "../../assets/super-sete.png";

const TYPES = [
  "mega-sena",
  "lotofacil",
  "quina",
  "lotomania",
  "timemania",
  "dupla-sena",
  "loteria-federal",
  "dia-de-sorte",
  "super-sete"
  ];

function Home() {
  return (
    <Container>
      <ContainerJogos>
      <Link to={`/Resultado/mega-sena`}>
        <CategoryItem key="mega-sena" src={logoMegasena} />
      </Link>
      <Link to={`/Resultado/lotofacil`}>
      <CategoryItem key="lotofacil" src={logolotofacil} />
      </Link>
      <Link to={`/Resultado/quina`}>
      <CategoryItem key="quina" src={logoquina} />
      </Link>
      <Link to={`/Resultado/lotomania`}>
      <CategoryItem key="lotomania" src={logolotomania} />
      </Link>
      <Link to={`/Resultado/timemania`}>
      <CategoryItem key="timemania" src={logotimemania} />
      </Link>
      <Link to={`/Resultado/dupla-sena`}>
      <CategoryItem key="dupla-sena" src={logoduplasena} />
      </Link>
      <Link to={`/Resultado/loteria-federal`}>
      <CategoryItem key="loteria-federal" src={logoloteriafederal} />
      </Link>
      <Link to={`/Resultado/dia-de-sorte`}>
      <CategoryItem key="dia-de-sorte" src={logodiadesorte} />
      </Link>      
      <Link to={`/Resultado/super-sete`}>
      <CategoryItem key="super-sete" src={logosupersete} />
      </Link> 
      </ContainerJogos>
    </Container>
    
  );
}

export default Home;