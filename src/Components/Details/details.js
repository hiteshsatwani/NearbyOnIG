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
            place: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }


    render() {

        return (
            <div>
                <div className="locationouter">
                    <div className="location">
                        <Select
                            className="basic-single"
                            classNamePrefix="select"
                            defaultValue="Select One"
                            name="Locations"
                            options={Locations}
                            onChange= {this.setState(place, onChange)}
                        />
                        <label><textarea value={this.state.value} onChange={this.handleChange} /></label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Details
