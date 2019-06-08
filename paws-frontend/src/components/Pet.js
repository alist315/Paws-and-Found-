import React, { Component } from 'react';

class Pet extends Component {
  render() {
    return (
      <div className="pet">
        <div className="pet-info">
          {this.props.pet.name}
          {this.props.pet.species}
          {this.props.pet.breed}
          {this.props.pet.photo}
          {this.props.pet.last_known_location}
          {this.props.pet.description}
        </div>
        this is the Pet component
      </div>
    )
  }
}

export default Pet;
