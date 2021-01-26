import React, { Component } from 'react';
import Delayed from '../delay'
import './location.css'
import './location.scss'
import { Typewriter } from 'react-typewriting-effect'
import Select from 'react-select';
import { Locations } from '../data'


class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
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

    changestage(newStage){
        this.props.setStage(newStage)
      }

    render() {

        return (<div>
            <div className="typewriter">
                <div className="heading2">
                    <Typewriter
                        string='Select your Location'
                        delay={80}
                        stopBlinkinOnComplete

                    />
                </div>
                <div className="subtext2">
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
                        <Delayed waitBeforeShow={0}>
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
                        <a class="bttn-dark" onClick={() => this.setLocation(this.state.place) & this.changestage(2)}>Continue</a>
                    </div>
                }
            </div>

        </div>
        )
    }
}

export default Details
