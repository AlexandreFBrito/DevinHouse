import "./App.css";
import React,{useState, useEffect} from "react";
import Personagem from "./components/Personagem";
import SeletorPersonagem from "./components/SeletorPersonagem";
import Header from "./components/Header";

const estado_inicial = {
  name: "",
  birth_year: "",
  gender: "",
  mass: "",
  height: "",
  eye_color: "",
  hair_color: "",
};

function App() {
  //https://swapi.dev/api/people/1/
  
  // useState
  const [person, setPerson] = useState([estado_inicial]);
  const [selectperson, setSelectperson] = useState(1);
  const [title, setTitle] = useState('');
/*   useEffect(() => {
    async function fetchPersonagem() {
      let response = await fetch('https://swapi.dev/api/people/1/')
      response = await response.json();
      setPerson(response);
    }
    fetchPersonagem();
  }, []) */

  // useEffect para alterar título
  useEffect(() => {    
    document.title = title;
  }, [title]);

  // useEffect para alterar personagem
  useEffect(() => {
    async function fetchPersonagem() {
      let response = await fetch(`https://swapi.dev/api/people/${selectperson}/`)
      response = await response.json();
      setPerson(response);
    }
    fetchPersonagem();
    
  }, [selectperson]);
  
  return (
    <div>      
      <Header />
      <SeletorPersonagem valor={selectperson} onChange={(event) => {setSelectperson(event.target.value)}} />
      <Personagem dados={person}/>
{/*       <Personagem
        nome={person.name}
        nascimento={person.birth_year}
        genero={person.gender}
        peso={person.mass}
        altura={person.height}
        corOlhos={person.eye_color}
        corCabelo={person.hair_color}
      /> */}
    </div>
  );
}

export default App;
