import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.buttonClick = this.buttonClick.bind(this);
    this.buttonClick2 = this.buttonClick2.bind(this);
    this.buttonClick3 = this.buttonClick3.bind(this);
    this.state = {
      numeroDeCliquesBtn1: 0,
      numeroDeCliquesBtn2: 0,
      numeroDeCliquesBtn3: 0,
    }
  }

  buttonClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesBtn1: estadoAnterior.numeroDeCliquesBtn1 + 1,
    }));
    return console.log('Hello World', this,);
  }

  buttonClick2() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesBtn2: estadoAnterior.numeroDeCliquesBtn2 + 1,
    }));
    return console.log('Hello World', this);
  }

  buttonClick3() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesBtn3: estadoAnterior.numeroDeCliquesBtn3 + 1,
    }));
    return console.log('Hello World', this);
  }

  buttonBackgroundColor(number) {
    return number % 2 === 0 ? 'green' : 'blue';
  }

  render() {
    const { numeroDeCliquesBtn1, numeroDeCliquesBtn2, numeroDeCliquesBtn3 } = this.state
    return (
      <div>
        <button
          onClick={this.buttonClick}
          style={ {backgroundColor: this.buttonBackgroundColor(numeroDeCliquesBtn1)} }
        >
          {numeroDeCliquesBtn1}
        </button>

        <button
          onClick={this.buttonClick2}
          style={ {backgroundColor: this.buttonBackgroundColor(numeroDeCliquesBtn2)} }
        >
          {numeroDeCliquesBtn2}
        </button>

        <button
          onClick={this.buttonClick3}
          style={ {backgroundColor: this.buttonBackgroundColor(numeroDeCliquesBtn3)} }
        >
          {numeroDeCliquesBtn3}
        </button>
      </div>
    );
  }
}

export default App;
