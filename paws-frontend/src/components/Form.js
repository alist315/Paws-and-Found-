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
      name: e.target.value,
      species: e.target.value,
      breed: e.target.value,
      photo: e.target.value,
      last_known_location: e.target.value,
      description: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleCreateTask(this.state)
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
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="animal name"
          />
          <input
            type='text'
            value={this.state.species}
            onChange={this.handleChange}
            placeholder="animal species"
          />
          <input
            type='text'
            value={this.state.breed}
            onChange={this.handleChange}
            placeholder="animal breed"
          />
          <input
            type='text'
            value={this.state.photo}
            onChange={this.handleChange}
            placeholder="animal photo"
          />
          <input
            type='text'
            value={this.state.last_known_location}
            onChange={this.handleChange}
            placeholder="last known location"
          />
          <input
            type='text'
            value={this.state.description}
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
