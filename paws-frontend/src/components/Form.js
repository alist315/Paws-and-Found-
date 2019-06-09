import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      species: '',
      breed: '',
      photo: '',
      last_known_location: '',
      description: '',
      found: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }

  handleChange = (e) => {
    this.setState({
    [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleCreatePet(this.state)
    this.clearForm()
  }

  clearForm(){
    this.setState({
      name: '',
      species: '',
      breed: '',
      photo: '',
      last_known_location: '',
      description: ''
    })
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.name} id="name"
            onChange={this.handleChange}
            placeholder="animal name"
          />
          <input
            type='text'
            value={this.state.species} id="species"
            onChange={this.handleChange}
            placeholder="animal species"
          />
          <input
            type='text'
            value={this.state.breed} id="breed"
            onChange={this.handleChange}
            placeholder="animal breed"
          />
          <input
            type='text'
            value={this.state.photo} id="photo"
            onChange={this.handleChange}
            placeholder="animal photo"
          />
          <input
            type='text'
            value={this.state.last_known_location} id="last_known_location"
            onChange={this.handleChange}
            placeholder="last known location"
          />
          <textarea
            type='text'
            value={this.state.description} id="description"
            onChange={this.handleChange}
            placeholder="description"
          />
          <button
            type="submit"
            className="submit-button">
            +
          </button>
        </form>
      </div>
    )
  }
}

export default Form;
