import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <header>
      <div className="navigation">
        <div className="title">
        <h1>PAWS AND FOUND</h1>
          <h2>
          {(() => {
          switch(this.props.currentView) {
            case 'about':
              return 'About'
            case 'lost':
              return 'Lost Pets'
            case 'found':
              return 'Found Pets'
            default:
              return null
          }
        })()}
          </h2>
        </div>
          <a onClick={() => {this.props.handleView('lost')}}>
            {this.props.lostCount} LOST
          </a>

          <a onClick={() => {this.props.handleView('found')}}>
            {this.props.foundCount} FOUND
          </a>
          <a onClick={() =>{this.props.handleView('about')}}>
          ABOUT </a>
      </div>
      </header>
    )
  }
}

export default Navigation;
