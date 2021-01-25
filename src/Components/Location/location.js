import React, { Component } from 'react';
import Delayed from '../delay'
import './location.css'
import './location.scss'
import { Typewriter } from 'react-typewriting-effect'
import Select from 'react-select';
import { Locations } from '../data'
import { Input } from 'semantic-ui-react'


class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            place: '',
            buttonp2: false ? true : false
        };
    }

    change(event) {
        this.setState({ place: event.value, buttonp2: true });
    }


    setLocation(place){
        this.props.setLocation(place)
    }

    render() {

        return (<div>
            <div className="typewriter">
                <div className="heading">
                    <Typewriter
                        string='Select your Location'
                        delay={80}
                        stopBlinkinOnComplete

                    />
                </div>
                <div className="subtext">
                    <Delayed waitBeforeShow={2000}>
                        <Typewriter
                            string="Pick the location nearest to you"
                            delay={80}
                            stopBlinkinOnComplete

                        />
                    </Delayed>
                </div>
                <div className="locationouter">
                    <div className="location">
                        <Delayed waitBeforeShow={5000}>
                            <Select
                                className="basic-single"
                                classNamePrefix="select"
                                defaultValue="Select One"
                                name="Locations"
                                options={Locations}
                                onChange={this.change.bind(this)}

                            />
                        </Delayed>
                    </div>
                </div>
            
                {this.state.buttonp2 &&
                    <div class="flex dark">
                        <a href="#0" class="bttn-dark" onClick={() => this.setLocation(this.state.place)}>Continue</a>
                    </div>
                }
            </div>

        </div>
        )
    }
}

export default Details
