import React, { Component } from 'react';
import Delayed from '../delay'
import './details.css'
import { Typewriter } from 'react-typewriting-effect'
import Select from 'react-select';
import { Locations } from '../data'


class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            place: '',
            button: false ? true : false
        };

        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);

    }

    handleChangeInput(event) {
        this.setState({ username: event.target });
    }

    handleChangeSelect(event) {
        this.setState({ place: event.target });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
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
                    <Delayed waitBeforeShow={3000}>
                        <Typewriter
                            string="Pick the location nearest to you"
                            delay={80}
                            stopBlinkinOnComplete

                        />
                    </Delayed>
                </div>
                <div className="buttons2">
                <div class="container">
                    <a class="btn effect04" data-sm-link-text="JOIN" target="_blank"  ><span>NEXT</span></a>
                </div>
            </div>
            </div>

            <div className="locationouter">
                <div className="location">
                    <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue="Select One"
                        name="Locations"
                        options={Locations}


                    />
                </div>
            </div>

            

        </div>
        )
    }
}

export default Details
