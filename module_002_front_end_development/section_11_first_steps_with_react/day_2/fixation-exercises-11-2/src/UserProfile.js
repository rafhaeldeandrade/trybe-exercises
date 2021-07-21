import React from 'react';

export default class UserProfile extends React.Component {
  render() {
    const { id, name, email, avatar } = this.props.user;
    return (
      <div>
        Id: {id} <br/>    
        Name: {name} <br/>    
        Email: {email} <br/>    
        Avatar: {avatar}    
      </div>
    );
  }
}