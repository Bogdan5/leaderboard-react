import React, { Component } from 'react';
import './App.css';

class Cards extends Component {


  render() {
    return (
      <div className="card-container">
        <div>{this.props.username}</div>
        <div>{this.props.urlImg}</div>
        <div>{this.props.alltime}</div>
        <div>{this.props.recent}</div>
      </div>
    );
  }
}

export default Cards;
