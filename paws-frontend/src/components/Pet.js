import React, { Component } from 'react';

class Pet extends Component {
  render() {
    return (
      <div className="pet">
        <div className="pet-info">
          <h3>{this.props.pet.name}</h3>
          <h4>{this.props.pet.species}</h4>
          <h4>{this.props.pet.breed}</h4>
          <img src={this.props.pet.photo} />
          <h4>{this.props.pet.last_known_location}</h4>
          <h4>{this.props.pet.description}</h4>
        </div>
      </div>
    )
  }
}

export default Pet;
