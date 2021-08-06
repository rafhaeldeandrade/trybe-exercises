import React, { Component } from 'react'

export default class Dog extends Component {
  render() {
    const { dog } = this.props;
    return (
        <img src={dog.message} alt={dog.message} />
    )
  }
}
