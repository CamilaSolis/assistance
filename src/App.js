import React, { Component } from 'react';
import Value from './Value';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
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
        return (item.clave == codigo ? item.name : null)})
    }

    //alert('¡Bienvenida: ' + nom(this.state.code).join('') + '!');
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
          <button type="submit" className="enter" onClick={() => this.setState({ show: true })}>ENTER</button>
        </form>
        <SweetAlert
        show={this.state.show}
        title="Hola"
        text="oli"
        onConfirm={() => this.setState({ show: false })}
        />
      </div>
    )
  }
}

export default App;
