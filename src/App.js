import React, { Component } from 'react';
import Cards from './components/Cards';
import Header from './components/Header';
import './App.css';

class App extends Component {
  constructor (props){
    super(props);
    console.log("construct");
    this.state = {data:[{"username":"sjames1958gm","img":"https://avatars1.githubusercontent.com/u/4639625?v=4","alltime":8597,"recent":116,"lastUpdate":"2018-02-03T18:14:36.182Z"}], isRecent:true};
  }

  getData = () => {
    fetch(this.state.isRecent?'https://fcctop100.herokuapp.com/api/fccusers/top/recent':
      'https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .then(
        (response)=>{
          if (response.status !== 200){
            console.log("Something wrong: "+response.status);
          }
          console.log("stuff");
          response.json().then((dat)=>{
            console.log(dat);
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

  onrecent=()=>{
    if (!this.state.isRecent){
      this.setState({isRecent:true});
      this.getData();
    }
  }
  onalltime=()=>{
    if (this.state.isRecent){
      this.setState({isRecent:false});
      this.getData();
    }
  }

  render() {
    return (
      // addCards(this.state.recentOn)
      <div className="wrapper">
        <div onClick={this.onrecent}>
          Recent
        </div>
        <div onClick={this.onalltime}>Alltime</div>
        {
          this.state.data.map((item)=>(<Cards key={item.username} name={item.username}
            urlImg={item.img} alltime={item.alltime}
            recent={item.recent}/>))
        }
      </div>
    );
  }
}

export default App;
