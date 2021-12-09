import './App.css';
import Figure from './components/Figure';

function App() { 
  return(
    <>
      <Figure type="triangle" titulo="triangle" bg="blue" ></Figure>
      <Figure type="square" titulo="square" bg="red" ></Figure>
      <Figure type="circle" titulo="circle" bg="green" ></Figure>
      <Figure type="rectangle" titulo="rectangle" bg="violet" ></Figure>
    </>
  );
}

export default App;
