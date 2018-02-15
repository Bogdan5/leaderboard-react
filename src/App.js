import React, { Component } from 'react';
import Cards from './components/Cards';
import Header from './components/Header';
import './App.css';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {recentOn:true};
  }
  let topRecent = [];
  let topAlltime = [];
  let x = false;
  let divResult = document.createElement("div");

  divResult.id = 'table';

  let getData = (isRecent) => {
    fetch(isRecent?'https://fcctop100.herokuapp.com/api/fccusers/top/recent':
      'https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .then(
        (response)=>{
          if (response.status !== 200){
            console.log("Something wrong: "+response.status);
          }

          response.json().then((data)=>data);
        }
      )
      .catch((error)=>{console.log("Error:"+error)})
  }


  let addCards = (this.state.recentOn) => {
    if (x = getData(this.state.recentOn)){
      divResult.appendChild(<Header/>);
      topRecent = x.sort((a,b)=>a.recent-b.recent);
      topRecent.forEach((elem)=>{
        divResult.appendChild(<Card name={elem.username};
        recentScore={elem.recent} alltimeScore={elem.alltime} image={elem.img}
      />)});
      let y = this.state.recentOn;
      this.setState({recentOn: !y})
      return divResult;
    }
  }

  render() {
    return (addCards(this.state.recentOn));
  }
}

export default App;
