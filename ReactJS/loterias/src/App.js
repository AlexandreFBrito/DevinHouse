import './App.css';
import Home from './pages/Home';
import Resultado from './pages/Resultado';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Resultado/:jogo" element={<Resultado />} />
      </Routes>
    </>
  );
}

export default App;
