import React, { Component } from "react";
import "./App.css";
import Person from "./Person/person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],

    otherState: "some other value",
  };

  switchNameHandler = () => {
    // console.log("was clicked");
    this.setState({
      persons: [
        { name: "Maximillion", age: 28 },
        { name: "Manuuuuuuu", age: 29 },
        { name: "Stephanie", age: 27 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1> Hi, Im a react app :)</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Racing
        </Person>

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
