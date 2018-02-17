import React, { Component } from 'react';

class Cards extends Component {
  // constructor (props){
  //   super(props);
  //   this.state = {recentOn:true};
  // }

  render() {
    return (
      // addCards(this.state.recentOn)
      <div className="header">
        <div>{this.props.key}</div>
        <div>{this.props.urlImg}</div>
        <div>{this.props.alltime}</div>
        <div>{this.props.recent}</div>
      </div>
    );
  }
}

export default Cards;
