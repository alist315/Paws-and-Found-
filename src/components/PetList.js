import React, { Component } from 'react';

import Pet from './Pet'

class PetList extends Component {
  render() {
    return (
      <div className="pet-list">
        {this.props.currentView === 'lost' ?
          <div className="pet-stuff">
            {this.props.lostPets.map((pet, index) => {
              return (
                <Pet
                  key={index}
                  arrayIndex={index}
                  pet={pet}
                  handleCheck={this.props.handleCheck}
                  currentArray='lostPets'
                  handleDelete={this.props.handleDelete}
                />
              )
            })}
          </div> :
          <div className="pet-stuff">
            {this.props.foundPets.map((pet, index) => {
              return (
                <Pet
                  key={index}
                  arrayIndex={index}
                  pet={pet}
                  handleCheck={this.props.handleCheck}
                  handleDelete={this.props.handleDelete}
                  currentArray='foundPets'
                />
              )
            })}
          </div>
        }
      </div>
    )
  }
}

export default PetList;
