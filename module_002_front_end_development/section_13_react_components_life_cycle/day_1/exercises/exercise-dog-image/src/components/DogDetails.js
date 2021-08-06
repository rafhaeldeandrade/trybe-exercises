import React, { Component } from 'react';
import Loading from './Loading';
import Dog from './Dog';

class DogDetails extends Component {
  constructor() {
    super()
    this.state = {
      dogs: undefined,
      loading: true,
    };
    this.fetchDoguinhos = this.fetchDoguinhos.bind(this);
  }

  componentDidMount() {
    this.fetchDoguinhos();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const { loading } = this.state;
    if (!loading && nextState.dogs.message.toLowerCase().includes('terrier')) return false;
    return true;
  }

  componentDidUpdate(_prevProps, prevState) {
      const { dogs } = prevState;
      if ( dogs ) {
        localStorage.setItem('dog', prevState.dogs.message);
        const breed = prevState.dogs.message.split('/')[4];
        alert(breed);
      }
    }
  

  fetchDoguinhos() {
    this.setState({ loading: true },
      async () => {
        const res = await fetch('https://dog.ceo/api/breeds/image/random');
        const json = await res.json();
        this.setState(
          {
            dogs: json,
            loading: false,
          });
      });
    }

  render() {
    const { dogs, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <div>
        <button onClick={this.fetchDoguinhos}>Gerar mais doguinhos</button><br/>
        <Dog key={dogs} dog={dogs} />
      </div>
    );
  }
}

export default DogDetails;