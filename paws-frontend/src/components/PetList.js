import React, { Component } from 'react';

import Pet from './Pet'

class PetList extends Component {
  render() {
    return (
      <div className="pet-list">
        this is the PetList component
        <Pet />
        {this.props.currentView === 'lost' ?
          <div>
            {this.props.lostPets.map((pet, index) => {
              return (
                <Pet
                  key={index}
                  arrayIndex={index}
                  pet={pet}
                  handleCheck={this.props.handleCheck}
                  currentArray='lostPets'
                />
              )
            })}
          </div> :
          <div>
            {this.props.foundPets.map((pet, index) => {
              return (
                <Pet
                  key={index}
                  arrayIndex={index}
                  pet={pet}
                  handleCheck={this.props.handleCheck}
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
