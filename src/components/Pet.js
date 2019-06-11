import React, { Component } from 'react';
import Form from './Form';
class Pet extends Component {
  render() {
    return (
      <div className="pet">
        <div className="pet-info">
          <h3>Name: {this.props.pet.name}</h3>
          <h4>Species: {this.props.pet.species}</h4>
          <h4>Breed: {this.props.pet.breed}</h4>
          <img src={this.props.pet.photo} />
          <h4>Last Known Location: {this.props.pet.last_known_location}</h4>
          <h4>Description: {this.props.pet.description}</h4>
        <div className="lost-found">
         {this.props.pet.found
           ? <button
             className="butt"
             onClick={() => {this.props.handleCheck(this.props.pet, this.props.arrayIndex, this.props.currentArray)}}
             >LOST</button>
           : <button
             className="butt"
             onClick={() => {this.props.handleCheck(this.props.pet, this.props.arrayIndex, this.props.currentArray)}}
             >FOUND</button>
         }
         <button className="delete" onClick={() => { this.props.handleDelete(this.props.pet.id, this.props.arrayIndex, this.props.currentArray)}}>X</button>
         </div>
         </div>
      </div>
    )
  }
}

export default Pet;
