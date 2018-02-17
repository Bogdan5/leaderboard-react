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
  // let topRecent = [];
  // let topAlltime = [];
  // let x = false;
  // this.divResult = document.createElement("div");
  //
  // this.divResult.id = 'table';
  // this.divResult.appendChild(<Header/>)

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
            this.setState({data:dat});
          });
        }
      )
      .catch((error)=>{console.log("Error:"+error)})
  };
componentDidMount(){
  console.log("mount");
  this.getData(this.state.isRecent);
  console.log('data is -'+this.state.data);
  // this.setState({data:this.getData(true)});
}

  // let addCards = (this.state.recentOn) => {
  //   if (x = getData(this.state.recentOn)){
  //     divResult.appendChild(<Header/>);
  //     topRecent = x.sort((a,b)=>a.recent-b.recent);
  //     topRecent.forEach((elem)=>{
  //       divResult.appendChild(<Card name={elem.username};
  //       recentScore={elem.recent} alltimeScore={elem.alltime} image={elem.img}
  //     />)});
  //     let y = this.state.recentOn;
  //     this.setState({recentOn: !y})
  //     return divResult;
  //   }
  // }



  render() {
    return (
      // addCards(this.state.recentOn)
      <div className="wrapper">
        {
          this.state.data.map((item)=>(<Cards key={item.username}
            urlImg={item.img} alltime={item.alltime}
            recent={item.recent}/>))
        }
      </div>
    );
  }
}

export default App;
