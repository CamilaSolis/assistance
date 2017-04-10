import React, { Component, PropTypes } from 'react';
import SweetAlert from 'sweetalert-react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h1>¡Bienvenida a clases!</h1>
        <div className="bv">Ingresa tu código</div>
        <input className="pass" /><br />
        <button className="enter">ENTER</button>
      </div>
    );
  }
}

export default App;
