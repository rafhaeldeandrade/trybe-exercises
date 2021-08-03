import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
    this.isNumeric = this.isNumeric.bind(this);
    this.resetInputs = this.resetInputs.bind(this);
    this.handleBtn = this.handleBtn.bind(this);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      role: '',
      resumee: '',
      desc: '',
      state: 'Amazonas',
    }
  }

  isNumeric(value) {
    return /^-?\d+$/.test(value);
  }

  handleInput({ target }) {
    const { city } = this.state;
    const inputName = target.name;
    const value = target.value;
    if (inputName === 'name') {
      this.setState({ name: value.toUpperCase() });
    } else if (inputName === 'city' && this.isNumeric(city[0])) {
      this.setState({ city: ''});
    } else if (inputName === 'address') {
      const re = /^[a-zA-Z]+$/;
      const match = target.value.match(re)
      this.setState({ address: [...match]});
    } else {
      this.setState({ [inputName]: value});
    }
  }

  resetInputs() {
    this.setState({
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      role: '',
      resumee: '',
      desc: '',
    });
  }

  handleBtn({ target }) {
    if (target.type === 'reset') this.resetInputs(); return;
    
  }

  render() {
    const { name, email, cpf, address, city, role, resumee, desc } = this.state;
    return (
      // <div>
      <form>
        <fieldset className="personal-data">
          <div className="input-div">
            <label className="label-input">Nome:</label>
            <input value={name} onChange={this.handleInput} className="text-input" type="text" name="name" maxLength="40" required/>
          </div>
          <div className="input-div">
            <label className="label-input">Email:</label>
            <input value={email} onChange={this.handleInput} className="text-input"type="email" name="email" maxLength="50" required/>
          </div>
          <div className="input-div">
            <label className="label-input">CPF:</label>
            <input value={cpf} onChange={this.handleInput} className="text-input"type="text" name="cpf" maxLength="11" required/>
          </div>
          <div className="input-div">
            <label className="label-input">Endereço:</label>
            <input value={address} onChange={this.handleInput} className="text-input"type="text" name="address" maxLength="200" required/>
          </div>
          <div className="input-div">
            <label className="label-input">Cidade:</label>
            <input value={city} onChange={this.handleInput} className="text-input"type="text" name="city" maxLength="28" required/>
          </div>
          <div className="input-div">
            <label className="label-input">Estado:</label>
            <select name="state">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="input-div">
            <label className="label-input">Tipo:</label>
            <input className="radio-input" type="radio" name="type" value="house" />
            <label className="radio-input" htmlFor="house">Casa</label>
            <input className="radio-input" type="radio" name="type" value="apartment" />
            <label className="radio-input" htmlFor="house">Apartamento</label>
          </div>
        </fieldset>
        <fieldset className="resumee-data">
          <div className="flex-column">
            <label>Resumo do currículo:</label>
            <textarea value={resumee} onChange={this.handleInput} name="resumee" maxLength="1000" rows="10" cols="50" required></textarea>
          </div>
          <div className="input-div self-start">
            <label className="label-input">Cargo:</label>
            <input value={role} onChange={this.handleInput} name="role" className="text-input" type="text" maxLength="40" required />
          </div>
          <div className="input-div self-start">
            <label className="label-input">Descrição do Cargo:</label>
            <input value={desc} onChange={this.handleInput} name="desc" className="text-input" type="text" maxLength="500" required />
          </div>
        </fieldset>
        <button type="submit" className="btn btn-primary">Enviar</button>
        <button type="reset" onClick={this.handleBtn} className="btn btn-reset">Apagar tudo</button>
      </form>
    );
  }
}

export default Form;