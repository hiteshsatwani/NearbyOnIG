import React, { Component } from 'react';
import Delayed from '../delay'
import './home.css'
import { Typewriter } from 'react-typewriting-effect'
import App from "../../App"


class Home extends Component {


  changestage(newStage) {
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
          <div class="flex dark">
            <a href="#0" class="bttn-dark" onClick={() => this.changestage(1)}>Join Now</a>
          </div>
        </Delayed>

      </div >
    )
  }
}

export default Home 