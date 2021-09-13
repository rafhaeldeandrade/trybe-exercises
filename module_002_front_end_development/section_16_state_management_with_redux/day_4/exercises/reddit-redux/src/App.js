import React, { Component } from 'react';
import RedditForm from './components/RedditForm.js';
import RedditResult from './components/RedditResult';

class App extends Component {
  render() {
    return (
      <div>
        <RedditForm />
        <RedditResult />
      </div>
    )
  }
}

export default App;
