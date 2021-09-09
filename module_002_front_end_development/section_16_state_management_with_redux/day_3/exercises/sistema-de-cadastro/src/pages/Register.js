import React, { Component } from 'react'
import { addUser } from '../redux/actions';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

export class Register extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      age: '',
      email: '',
    }

    this.handleInput = this.handleInput.bind(this);
    this.register = this.register.bind(this);
  }

  handleInput({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  register() {
    const { name, age, email } = this.state;
    const { addUser } = this.props;
    if (!name || !age || !email) {
      window.alert('Please check the registration fields');
      return;
    }
    addUser(this.state);
    this.setState({name: '', age: '', email: ''});
  }

  render() {
    const { name, age, email } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="name">
            Nome
            <input
              type="text"
              value={ name }
              name="name"
              onChange={ this.handleInput }
            />
          </label>
          <label htmlFor="age">
            Idade
            <input
              type="text"
              value={ age }
              name="age"
              onChange={ this.handleInput }
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              value={ email }
              name="email"
              onChange={ this.handleInput }
            />
          </label>
          <button type="button" onClick={ this.register }>Registrar</button>
          <button type="button" onClick={ () => this.props.history.push('/registered') }>Registrados</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addUser: (obj) => dispatch(addUser(obj)),
});

export default withRouter(connect(null, mapDispatchToProps)(Register));
