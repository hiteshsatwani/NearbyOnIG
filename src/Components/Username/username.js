import React, { Component } from 'react';
import Delayed from '../delay'
import './username.css'
import { Typewriter } from 'react-typewriting-effect'


class Username extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Username',
            buttonp2: false ? true : false
        };
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({ username: event.target.value })
    }

    changestage(newStage){
        this.props.setStage(newStage)
      }

    setUsername(username){
        this.props.setUsername(username)
    }

    handleclick() {
        this.setState({ username: "" })
    }

    render() {
        return (
            <div className="mainContainer">
                <div className="heading3">
                    <Typewriter
                        string='Enter Your Instagram Username'
                        delay={80}
                        stopBlinkinOnComplete
                    />
                </div>
                <Delayed waitBeforeShow={3000}>
                    <div className="subtext3">
                        <Typewriter
                            string='This will be used to add you to the group chat'
                            delay={80}
                            stopBlinkinOnComplete
                        />
                    </div>
                </Delayed>
                <Delayed waitBeforeShow={4000}>
                <div className="inputField">
                    <input type="text" value={this.state.username} onChange={this.handleChange} className="field" onClick={() => this.handleclick()} />
                </div>
                </Delayed>
                <Delayed waitBeforeShow={7000}>
                <div class="flex dark">
                    <a class="bttn-dark" onClick={() => this.setUsername(this.state.username) & this.changestage(3)}>Continue</a>
                </div>
                </Delayed>
            </div>
        )
    }
}

export default Username