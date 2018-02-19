import React, { Component } from 'react';
import '../App.css';

// this component includes all the information for each entry on the leaderboard
class Cards extends Component {

  render() {
    return (
      <div className="card-container">
        <div>{this.props.number}</div>
        <div><img src={this.props.urlImg} alt=""/><section>{this.props.name}</section></div>
        <div>{this.props.recent}</div>
        <div>{this.props.alltime}</div>
      </div>
    );
  }
}

export default Cards;
