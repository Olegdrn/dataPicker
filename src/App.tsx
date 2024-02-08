import React from 'react';
import './App.css';
import { Calendar } from './components/calendar/Calendar';
import { Years } from './components/yearsMode/Years';
import { Months } from './components/monthsMode/Months';
import { Navbar } from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/> 
    </div>
  );
}

export default App;
