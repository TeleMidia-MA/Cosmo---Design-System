import React from 'react';
import logo from './logo.svg';
// import './App.css';

import "./assets/scss/style.scss"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}/>

        <div class="alert alert-primary" role="alert">
          Um simples alerta primary. Olha só!
        </div>

      </header>
    </div>
  );
}

export default App;
