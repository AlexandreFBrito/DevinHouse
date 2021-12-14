import './App.css';
import LessText from './components/Less';

function App() {
  return (
    <div className="App">
      <LessText
          texto="Olá, tudo bem como vai ? Como está a familia ?"
          tamanho={10}
      > </LessText>
    </div>
  );
}

export default App;
