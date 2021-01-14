import './App.css';
import Delayed from './Components/delay'
import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'
import Home from './Components/Home/home'
import React, { Component } from 'react';
import Details from './Components/Details/details'



class App extends Component {

  constructor() {
    super();

    this.state = {
      home: true ? true : false
    }

  }


  changeHome(newValue) {
    this.setState({
      home: newValue,
    });
  }


  render() {
    return (
      <div>
        {this.state.home && <Home home={this.state.home} changeHome={this.changeHome.bind(this)} />}
        {!this.state.home && <Details/>}
      </div>  
    );
  }
}


export default App;

