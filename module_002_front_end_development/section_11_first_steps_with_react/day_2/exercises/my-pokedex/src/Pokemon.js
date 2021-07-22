import React from 'react';

export default class Pokemon extends React.Component {
  render() {
    const { id, name, type, averageWeight, image, moreInfo } = this.props.pokemon;

    return (
      <div className="pokemon">
        <div className="stats">
          <h2 className='pokemon-name'>{name}</h2>
          <span>{type}</span>
          <span>{averageWeight.value}{averageWeight.measurementUnit}</span>
          <span>{id}</span>
        </div>
        <div className="pokemon-image">
          <a href={moreInfo}><img src={image} alt={name + ' image'} /></a>
        </div>
      </div>
    );
  }
}
