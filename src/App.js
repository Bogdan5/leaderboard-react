import React, { Component } from 'react';
import Cards from './components/Cards';
import './App.css';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {data:[{"username":"sjames1958gm","img":"https://avatars1.githubusercontent.com/u/4639625?v=4","alltime":8597,"recent":116,"lastUpdate":"2018-02-03T18:14:36.182Z"}], isRecent:true};
  }
  // method fetches the data, sorts it and then sets it as state
  getData = () => {
    fetch(this.state.isRecent?'https://fcctop100.herokuapp.com/api/fccusers/top/recent':
      'https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .then(
        (response)=>{
          if (response.status !== 200){
            console.log("Something wrong: "+response.status);
          }
          response.json().then((dat)=>{
            dat.sort((a,b)=>this.state.isRecent?b.recent-a.recent:b.alltime-a.alltime);
            this.setState({data:dat});
          });
        }
      )
      .catch((error)=>{console.log("Error:"+error)})
  };

  componentDidMount(){
    this.getData();
  }
  // reinitializes the data if the recent column head is clicked
  onrecent=()=>{
    if (!this.state.isRecent){
      this.setState({isRecent:true});
      this.getData();
    }
  }
  // reinitializes the data if the alltime column head is clicked
  onalltime=()=>{
    if (this.state.isRecent){
      this.setState({isRecent:false});
      this.getData();
    }
  }

  render() {
    let index=0;  //the index in the number column
    return (
      // addCards(this.state.recentOn)
      <div className="wrapper">
        <div>Leaderboard</div>
        <div className="columns">
          <div>No.</div>
          <div>Name</div>
          <div onClick={this.onrecent}>Points in the last 30 days{this.state.isRecent?"\u25BC":''}</div>
          <div onClick={this.onalltime}>Alltime points{this.state.isRecent?'':"\u25BC"}</div>
        </div>
        {
          this.state.data.map((item)=>
            (<Cards key={item.username} number={++index} name={item.username}
            urlImg={item.img} alltime={item.alltime}
            recent={item.recent}/>))
        }
      </div>
    );
  }
}

export default App;
