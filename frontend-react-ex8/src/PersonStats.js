import React, { Component } from 'react';
//import logo from "./logo.svg";

class PersonStats extends Component {
    constructor(props) {
        super(props);
        this.state = {Name: "", Age: "", Feeling: ""}
    }

personFunction = (event) => {
    this.setState({Name: event.target.value});

};
ageFunction = (event) => {
    this.setState({Age: event.target.value});

};
feelingFunction = (event) => {
this.setState({Feeling:event.target.value});

};
submitionFunction = (event) => {
    console.log("Submitted Form");
    event.preventDefault()
};
        render(){


        return (
            <div>

                <form onSubmit={this.submitionFunction}>
                    <h1>Person Stats</h1>
                    <label>Name:</label>
                    <input type="text" placeholder={"Enter your name"} id="Name" value={this.state.Name} onChange={this.personFunction}/>
                    <label>Age:</label>
                    <input type={"text"} placeholder={"Enter your age"} id={"Age"} value={this.state.Age} onChange={this.ageFunction}/>
                    <label>Feeling:</label>
                    <input type={"text"} placeholder={"How do you feel"} id={"Feeling"} value={this.state.Feeling} onChange={this.feelingFunction}/>
                    <br/>
                    <button>Submit</button>

            </form>
            </div>
        );
    }
}
        export default PersonStats;