import React, { Component } from 'react';

import Pet from './Pet'

class PetList extends Component {
  render() {
    return (
      <div className="pet-list">
        <Pet />
      </div>
    )
  }
}

export default PetList;
