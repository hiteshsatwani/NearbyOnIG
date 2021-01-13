import React, { Component } from 'react';
import Delayed from '../delay'
import './home.css'
import { Typewriter } from 'react-typewriting-effect'
import App from "../../App"


class Home extends Component {
    render() {
        return (
            <div className="typewriter">
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
      <Delayed waitBeforeShow={8000}>
        <div class="buttons">
          <div class="container">
            <a href="" class="btn effect04" data-sm-link-text="JOIN" target="_blank" onClick={() => App.togglehomestate()}><span>NEXT</span></a>
          </div>
        </div>
      </Delayed>

    </div >
        )
    }
}

export default Home 