import React, { Component } from 'react';
import Delayed from '../delay'
import './home.css'
import { Typewriter } from 'react-typewriting-effect'
import App from "../../App"


class Home extends Component {


  changestage(newStage){
    this.props.setStage(newStage)
  }

    render() {
        return (
            <div className="heading">
      <Typewriter
        string='Welcome to Nearby on Instagram'
        delay={80}
        stopBlinkinOnComplete

      />
      <Delayed waitBeforeShow={3000}>
        <div className="subtext">
          <Typewriter
            string="A new platform designed to help meet new people near you"
            delay={80}
            stopBlinkinOnComplete

          />
        </div>
      </Delayed>
      <Delayed waitBeforeShow={0}>
        <div class="buttons">
          <div class="container">
            <a class="btn effect04" data-sm-link-text="JOIN" target="_blank" onClick={() => this.changestage(1)} ><span>NEXT</span></a>
          </div>
        </div>
      </Delayed>

    </div >
        )
    }
}

export default Home 