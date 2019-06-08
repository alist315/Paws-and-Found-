import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Form from './components/Form';
import PetList from './components/PetList';

class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        currentView: 'lost',
        foundPets: [],
        lostPets: []
      }
      this.handleCreatePet = this.handleCreatePet.bind(this)
    }
handleCreatePet(pet) {
  fetch('http:localhost:3000/pets', {
    body:JSON.stringify(pet),
    method:'POST',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    }
  })
      .then( createdPet => createdPet.json())
      .then( jData => {
      this.updateArray(jData, 'lostPets')
      this.handleView('lost')
  })
    .catch ( err => console.log('this is and error', err))
}











  render (){
    return (

    )
  }
}

export default App;
