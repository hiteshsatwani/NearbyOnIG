import './App.css';
import 'react-typewriting-effect/dist/index.css'
import Home from './Components/Home/home'
import React, { Component } from 'react';
import Location from './Components/Location/location'
import Username from './Components/Username/username'
import Loading from './Components/Loading/loading'

class App extends Component {

  constructor() {
    super();

    this.state = {
      stage: 0,
      username: '',
      location: ''
    }

  }
  setUsername(newValue) {
    this.setState({
      username: newValue,
    });
  }

  setLocation(newValue) {
    this.setState({
      username: newValue,
    });
  }

  setStage(newValue) {
    this.setState({
      stage: newValue,
    });
  }


  render() {
    return (
      <div>
        {this.state.stage === 0 &&  <Home stage={this.state.stage} setStage={this.setStage.bind(this)} />}
        {this.state.stage === 1 && <Location location={this.state.location} setLocation={this.setLocation.bind(this)} stage={this.state.stage} setStage={this.setStage.bind(this)} />}
        {this.state.stage === 2 && <Username username={this.state.username} setUsername={this.setUsername.bind(this)} stage={this.state.stage} setStage={this.setStage.bind(this)}/>}
        {this.state.stage === 3 && <Loading />}
      </div>
    );
  }
}


export default App;