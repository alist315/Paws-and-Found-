import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <header>
      <div className="navigation">
        <div className="title">
          <h1>
            {this.props.currentView === 'lost' ? 'LOST PETS' : 'FOUND PETS'}
          </h1>
        </div>
          <a onClick={() => {this.props.handleView('lost')}}>
            {this.props.lostCount} LOST
          </a>

          <a onClick={() => {this.props.handleView('found')}}>
            {this.props.foundCount} FOUND
          </a>
      </div>
      </header>
    )
  }
}

export default Navigation;
