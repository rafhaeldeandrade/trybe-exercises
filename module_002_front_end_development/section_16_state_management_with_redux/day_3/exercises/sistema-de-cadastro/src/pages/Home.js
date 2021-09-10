import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/login">
          <button type="button">Login</button>
        </Link>
      </div>
    )
  }
}

export default Home;
