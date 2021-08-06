import React, { Component } from 'react';

class User extends Component {
  render() {
    const { user } = this.props;
    return (<div>
      <img src={user[0].picture.large} alt={user[0].name} />
      <p>{user[0].name.first} {user[0].name.last}</p>
      <p>{user.email}</p>
      <p>{user.dob.age} anos</p>
    </div>);
  }
}

export default User;
