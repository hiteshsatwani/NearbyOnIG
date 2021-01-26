import React, { Component } from 'react';
import './loading.css'
import Delayed from '../delay'




class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true ? true : false
        };
    }

    toggleloading() {
        console.log("ok")
        if (this.state.loading === true) {
            this.setState({ loading: false })
            console.log(false)
        }
        if (this.state.loading === false) {
            this.setState({ loading: true })
            console.log(true)
        }
    }
    render() {
        return (
            <div>
                {this.state.loading &&
                    <div id="preloader" onClick={() => this.toggleloading()}>
                        <div id="loader">
                        </div>
                    </div>}

                {!this.state.loading && <div>
                    <h1> Done</h1>
                </div>}


            </div>
        )
    }
}

export default Loading