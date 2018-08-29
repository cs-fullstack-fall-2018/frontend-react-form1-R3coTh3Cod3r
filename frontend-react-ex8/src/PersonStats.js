import React, { Component } from 'react';
import logo from "./logo.svg";

class PersonStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "", Age: "", Feeling: ""};
personFunction = (event) => {
            console.log("Submitted Form");
            this.setState({})
}

        return (
            <div>
                <form onSubmit={this.personFunction}>

                    <h1>Person 1</h1>
                    <label htmlFor="Name">Name: </label>
                    <input type="text" placeholder="enter your name"

            </form>
            </div>
        );
    }
}
        export default PersonStats;