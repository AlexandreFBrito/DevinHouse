import { Dashboard } from '@mui/icons-material';
import './App.css';
import Chart from './Components/Chart';
import Menu from "./Components/Menu";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";

function App() {
  const [date, setDate] = useState(new Date());
  
  return (
    <div className="App">
      <Menu></Menu>
      <DatePicker
      dateFormat="MMM yyyy"
      showMonthYearPicker
      selected={date}
      onChange={(date) => setDate(date)}
    />
    <button onClick={() => alert(date)}>Verificar data</button>
    </div>
  );
}

export default App;
