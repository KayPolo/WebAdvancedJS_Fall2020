import React, {Component} from 'react';
import './App.css';
import Header from './Header/Header';


class App extends Component{

  // render(){

  //   return<div>
    
  //     <h1>Hello</h1>
  //     <h2>This is my React App</h2>

  //     <Header/>


  //   </div>
   
  // }

  state = {

    people:[

      {name: 'Karla', age:30},
      {name: 'Diana', age:63},
      {name: 'Brandon', age:26}

    ] 
  }

  switchName = ()=>{
    this.setState({
      people:[

        {name: 'Brian', age:10},
        {name: 'Rita', age:35},
        {name: 'Marlene', age:22}
  
      ] 


    });
  
  }



  render(){
    return(

      <div className = "App">

      <button onClick = {this.switchName}  >SWITCH NAMES</button>

      
        <Header name = {this.state.people[0].name} age = {this.state.people[0].age}/>
        <Header name = {this.state.people[1].name} age = {this.state.people[1].age}/>
        <Header name = {this.state.people[2].name} age = {this.state.people[2].age}/>
      </div>

    )

  }



}

export default App;