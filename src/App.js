import './App.css';
import Delayed from './Components/delay'
import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'
import Home from './Components/Home/home'
import React, { Component } from 'react';



class App extends Component {



  constructor() {
    super();

    this.state = {
      home: true ? true : false
    }

  }



  render() {
    return (
      <div>
        {this.state.home && <Home />}
      </div>  
    );
  }
}

export default App;
