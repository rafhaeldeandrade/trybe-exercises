import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from "react-router";

export class Registered extends Component {
  render() {
    const { logged, data } = this.props;
    if (!logged) return <p>Login não efetuado</p>;
    if (!data) {
      return (
        <div>
          <p>Nenhum cliente cadastrado</p>
          <button onClick={ this.props.history.push('/register') } type="button">Registrar</button>
        </div>
      );
    }
    return (
      <>
      {data.map((obj, index) => {
        return (
          <div key={ `${obj}${index}` }>
            <p>{ obj.name }</p>
            <p>{ obj.age }</p>
            <p>{ obj.email }</p>
          </div>
        );
      })}
      <button onClick={ () => this.props.history.push('/register') } type="button">Registrar</button>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  logged: state.registration.login,
  data: state.registration.data,
});

export default withRouter(connect(mapStateToProps, null)(Registered));
