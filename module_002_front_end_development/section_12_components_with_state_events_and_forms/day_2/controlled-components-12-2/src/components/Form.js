import React, { Component } from 'react';
import '../css/Form.css';

class Form extends Component {
  constructor() {
    super();
    this.handleInputs = this.handleInputs.bind(this);
    this.state = {
      texto: '',
      estado: '1',
      nome: '',
      idade: 0,
      pratinha: false,
    }
  }

  handleInputs({ target }) {
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value});
  }

  setNameAgeStates(name, childData) {
    this.setState({
      [name]: childData,
    })
  }

  render() { 
    return (
      <form className="form">
        <fieldset className="fieldset">
          <div>
            <label>Nome:</label>
            <input onChange={this.handleInputs} name="nome" type="text" value={this.state.nome} />
          </div>
          <div>
            <label>Idade:</label>
            <input onChange={this.handleInputs} name="idade" type="number" value={this.state.idade}/>
          </div>
          <div>
            <label>Estado:</label>
            <select onChange={this.handleInputs} value={this.state.estado} name="estado">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="1">17</option>
            </select>
          </div>
          <div>
            <label>Mensagem:</label>
            <textarea name="texto" value={this.state.texto} onChange={this.handleInputs}/>
          </div>
        </fieldset>
        <fieldset>
          <label>Pratinha no LoL:</label>
          <input name="pratinha" onChange={this.handleInputs} type="checkbox" />
        </fieldset>
      </form>
    );
  }
}

export default Form;