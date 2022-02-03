import { Dashboard } from '@mui/icons-material';
import './App.css';
import Chart from './Components/Chart';
import Menu from "./Components/Menu";

function App() {
  return (
    <div className="App">
      <Menu></Menu>
        <Chart></Chart>
    </div>
  );
}

export default App;
