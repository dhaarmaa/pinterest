import React from 'react';
import logoPinterest from './logoPinterest.png';
import './App.css';
import Buttons from './component';
function App() {
  return (
    <div className="App">
      <body> 
        <div className= "navbar">
        <nav className="nav">
          <img src={logoPinterest} className="App-logo" alt="logo" />
          <input class="input" type="search" placeholder="Buscar" aria-label="Search"></input>
          <Buttons name='Inicio' btnClass= 'btnNav' />
				  <Buttons name='Usuario' btnClass= 'btnNav' />


        </nav>
        </div>
        </body> 
    </div>
  );
}

export default App;
