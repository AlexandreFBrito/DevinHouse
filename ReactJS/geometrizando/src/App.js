//componentes funcionais
//Todo componente começa com uma letra maiscula
import './App.css';
import Square from './components/Square';
import Circle from './components/Circle';
import CapsLock from './components/CapsLock';

function App() { 
  return(
    <>
      <Square titulo="Quadrado"/>
      <Square 
            titulo="Quadrado cinza"
            background="gray"/>
      <Square 
            titulo="Quadrado com largura"
            largura={100}/> 
      <Circle 
             titulo="Circulo"
          />       
      <CapsLock texto="Me deixe em Caps Lock"/>
    </>
  );
}

export default App;
