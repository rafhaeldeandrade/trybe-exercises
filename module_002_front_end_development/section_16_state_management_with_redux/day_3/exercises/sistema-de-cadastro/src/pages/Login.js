import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loggedIn } from '../redux/actions';
import { withRouter } from "react-router";

export class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
    this.onChangeInput = this.onChangeInput.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  onChangeInput({ target: { name, value } }) {
    this.setState({
      [name]: value
    });
  }

  checkLogin() {
    const { email, password } = this.state;
    const { login, history } = this.props;
    if (!email || !password) {
      login(false);
    } else {
      login(true);
    }
    history.push('/registered');
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email">
            Email
            <input
            name="email"
            type="text"
            onChange={ this.onChangeInput }
            value={ email }
            />
          </label>
          <label htmlFor="password">
            password
            <input
            name="password"
            type="password"
            onChange={ this.onChangeInput }
            value={password}
            />
          </label>
          <button type="button" onClick={ this.checkLogin }>Logar</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (boolean) => dispatch(loggedIn(boolean)),
});

const ShowTheLocationWithRouter = withRouter(Login);

export default withRouter(connect(null, mapDispatchToProps)(ShowTheLocationWithRouter));
