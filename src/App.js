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

  switchNameHandler = (newName) => {
    // console.log("was clicked");
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manuuuuuuu", age: 29 },
        { name: "Stephanie", age: 27 },
      ],
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1> Hi, Im a react app :)</h1>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Maximillon!!!")}
        >
          Switch Name
        </button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Max")}
          changed={this.nameChangeHandler}
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
