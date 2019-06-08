import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <div className="title">
          <h1>
            {this.props.currentView === 'lost' ? 'LOST PETS' : 'FOUND PETS'}
          </h1>
        </div>
        <ul>
          <li onClick={() => {this.props.handleView('lost')}}>
            {this.props.lostCount} LOST
          </li>
          <li onClick={() => {this.props.handleView('found')}}>
            {this.props.foundCount} FOUND
          </li>
        </ul>
      </div>
    )
  }
}

export default Navigation;
