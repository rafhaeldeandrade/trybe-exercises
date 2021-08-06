import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.fetchCharacters = this.fetchCharacters.bind(this);
    this.state = {
      characters: [],
    }
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  async fetchCharacters() {
    const fetchReturn = await fetch('https://rickandmortyapi.com/api/character');
    const jsonResponse = await fetchReturn.json();
    this.setState({characters: jsonResponse.results});
  }

  render() {
    const { characters } = this.state;
    return(
    <div className="App">
      <h1>Ricky and Morty Characters</h1>
      <div className="body">
        {characters.map((character) => {
          return (
            <div className="container" key={character.name}>
              <h3>{character.name}</h3>
              <img src={character.image} alt={character.name} />
            </div>
          );
        })}
      </div>
    </div>
    )}
}

export default App;
