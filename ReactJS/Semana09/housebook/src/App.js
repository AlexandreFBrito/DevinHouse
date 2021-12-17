import Header from "./components/Header";
import Logo from './assets/housebooklogo.png'
import Cards from "./components/Cards";
function App() {
  return (
  
  <>
    <Header logo={Logo}/>
    <Cards 
          name="Alexandre"
          profissao="Dev"
          bio="dsgkljfkjdghdfklhçdfklsghk"
    />
  </>

  );
}

export default App;
