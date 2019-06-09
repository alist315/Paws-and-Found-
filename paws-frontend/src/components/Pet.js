import React, { Component } from 'react';

class Pet extends Component {
  render() {
    return (
      <div className="pet">
        <div className="pet-info">{this.props}
          this is Pet component from inside the PetList component
          {this.props.pet.name}
        </div>
      </div>
    )
  }
}

export default Pet;
