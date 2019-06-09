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
    this.handleView = this.handleView.bind(this)
    this.fetchPets = this.fetchPets.bind(this)
    this.sortPets = this.sortPets.bind(this)
    this.setPets = this.setPets.bind(this)
    this.updateArray = this.updateArray.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
    this.removeFromArray = this.removeFromArray.bind(this)
  }

  handleCreatePet(pet) {
    console.log(pet);
    fetch('https://paws-and-found.herokuapp.com/pets', {
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
      this.fetchPets()
    })
    .catch ( err => console.log('this is an error', err))
  }

  updateArray(pet, array){
    this.setState( prevState => ({
      [array]:[...prevState[array],pet]
    }))
  }

  handleCheck(pet, arrayIndex, currentArray){
    pet.found = !pet.found
    fetch('https://paws-and-found.herokuapp.com/pets' + pet.id, {
      body: JSON.stringify(pet),
      method: 'PUT' ,
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then ( updatedPet => updatedPet.json())
    .then(jData => {
      this.removeFromArray(currentArray, arrayIndex)
      if(currentArray === 'lostPets') {
        this.updateArray(jData, 'foundPets')
      } else {
        this.updateArray(jData, 'lostPets')
      }
      this.fetchPets()
    })
    .catch (err => console.log('this is an error', err))
  }

  removeFromArray(array, arrayIndex) {
    this.setState(prevState => {
      prevState[array].splice(arrayIndex, 1)
      return {
        [array]: prevState[array]
      }
    })
  }

  fetchPets() {
    fetch('https://paws-and-found.herokuapp.com/pets')
    .then (data => data.json())
    .then (jData => {
      console.log('this is jData', jData)
      this.sortPets(jData)
    })
  }

  handleView(view) {
    this.setState({
      currentView: view
    })
  }

  sortPets(pets){
    let foundPets = []
    let lostPets = []
    pets.forEach(pet => {
      if(pet.found === 't') {
        foundPets.push(pet)
      } else {
        lostPets.push(pet)
      }
    })
    this.setPets(foundPets, lostPets)
  }

  setPets(found,lost){
    this.setState({
      foundPets : found,
      lostPets: lost
    })
  }

  componentDidMount(){
    this.fetchPets()
  }

  render (){
    return (
      <div className="Paws-container">
        <Navigation
          currentView={this.state.currentView}
          handleView={this.handleView}
          lostCount={this.state.lostPets.length}
          foundCount={this.state.foundPets.length}
        />
        <Form
          handleCreatePet={this.handleCreatePet}
        />
        <PetList
          currentView={this.state.currentView}
          handleView={this.handleView}
          lostPets={this.state.lostPets}
          foundPets={this.state.foundPets}
          handleCheck={this.handleCheck}
        />
      </div>
    );
  }
}

export default App;
