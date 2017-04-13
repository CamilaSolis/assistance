import React from 'react';
//import Value from './Value';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import logo from './logo.svg';
import students from './Alumn';
import './App.css';

class App extends React.Component {

  constructor () {
    super();

    this.state = {
      code: '',
      name: '',
      valid: false,
      invalid: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({ code: event.target.value });
  }

  handleSubmit (event) {
    event.preventDefault();
    const nom = (codigo) => students.filter((item, indice) => (item.clave === codigo))
    const { name } = (nom(this.state.code).length > 0) ? nom(this.state.code)[0] : ''
    if (typeof name === 'undefined') {
      this.setState({
        invalid: true
      })
    } else {
      this.setState({
        name,
        valid: true
      })
    }
  }

  render () {
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
        <SweetAlert
          show={this.state.valid}
          title="Hola"
          text={`Bienvenida, ${this.state.name}`}
          onConfirm={() => this.setState({ valid: false })}
        />
        <SweetAlert
          show={this.state.invalid}
          title="Hola"
          text="No existes en el sistema, largo de aquí"
          onConfirm={() => this.setState({ invalid: false })}
        />
      </div>
    )
  }
}

export default App;
