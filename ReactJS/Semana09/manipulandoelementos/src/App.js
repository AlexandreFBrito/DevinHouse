import { useState } from 'react';
import './App.css';

function App() {
  let horaInicial = new Date().toLocaleTimeString();
  const [hora, setHora] = useState(horaInicial);

  //const [anonascimento, mudarAnoNascimento] = useState(1987); 

  function atualizarHora(){
    horaInicial = new Date().toLocaleTimeString();
    setHora(horaInicial);
  }

  setInterval(atualizarHora, 1000)

  return (
    <div className="App">
      <h1>Olha a hora:</h1>
      <h2>{hora}</h2>
      


{/*       <button onClick={() => {
        console.log(anonascimento)
        mudarAnoNascimento(2000);
        console.log(anonascimento)
      }}>Botão</button> */}
    
    </div>
  );
}

export default App;
