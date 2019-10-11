import React from 'react';
import logoPinterest from './logoPinterest.png';
import './App.css';
import Buttons from './component';
function App() {
  return (
    <div className="App">
      <body> 
        <div className = "navFlex">
          <div className= "navbar">
            <nav className="nav">
              <img src={logoPinterest} className="App-logo" alt="logo" />
              <input class="input" type="search" placeholder="Buscar" aria-label="Search"></input>
              <Buttons name='Inicio' btnClass= 'btnNav' />
				      <Buttons name='Siguiendo' btnClass= 'btnNav' />
              <Buttons name="Dharma" btnClass = "btnNav" />            
            </nav>
          
          </div>
          <div className= "vl"></div>
        </div>
        </body> 
    </div>
  );
}

export default App;
