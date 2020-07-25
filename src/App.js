import React, { useState } from "react";
import "./App.css";
import Person from "./Person/person";

const app = (props) => {
  const [personsState, setPersons] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
  });

  const [otherState, setOtherState] = useState("some other value");

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log("was clicked");
    setPersons({
      persons: [
        { name: "Maximillion", age: 28 },
        { name: "Manuuuuuuu", age: 29 },
        { name: "Stephanie", age: 27 },
      ],
      otherState: personsState.otherState,
    });
  };

  return (
    <div className="App">
      <h1> Hi, Im a react app :)</h1>
      <button onClick={switchNameHandler}>Switch Name</button>

      <Person
        name={personsState.persons[0].name}
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />

      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>

      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default app;
