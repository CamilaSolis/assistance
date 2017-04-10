import React, { Component } from 'react';
import Value from './Value';
import SweetAlert from 'sweetalert-react';
import logo from './logo.svg';
import students from './Alumn';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state={
      code:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({code: event.target.value});
  }

  handleSubmit(event) {

    event.preventDefault();
    const nom = (codigo) => {
      return students.map((item, indice) => { 
        console.log(item.clave, item.name);
        return (item.clave == codigo ? item.name : null)})
    }
    console.log(nom(this.state.code), this.state.code)
    alert('¡Bienvenida: ' + nom(this.state.code).join('') + '!');
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h1>¡Bienvenida a clases!</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="bv">Ingresa tu código</div>
          <input type="text" value={this.state.code} onChange={this.handleChange} className="pass" /><br />
          <button type="submit" className="enter">ENTER</button>
        </form>
      </div>
    );
  }
}

export default App;
