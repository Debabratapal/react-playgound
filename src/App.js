import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'jfjf', name: 'Debu',age: 23},
      {id: 'jvfjna', name: 'Reshmi',age: 19},
      {id: 'jvjnajn', name: 'Sulagna',age: 22}
    ],
    otherState : 'some other state',
    showPersons: false
  }

  deletePersonHandler= (personIndex) => {
   //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; //alternative
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }
 

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });// find the index of the the parson based on the
    //id sent in this function 

    const person = {...this.state.persons[personIndex]};
    //fetch the person copy with the index from the 
    //original array

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

 
    this.setState({persons:persons});
  } 

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };
  
  render() {
    const style = {
      backgroundColor: 'orange',
      color: 'white',
      font: 'inherit',
      border: '1px solid orange',
      padding: '8px',
      boxShadow: '0 2px 3px #ccc',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click={this.deletePersonHandler.bind(this, index)} 
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })} 
        </div>
      );
      style.backgroundColor='red';
 
    }

    let classes = []

    if(this.state.persons.length <=2) {
      classes.push('red');
    }

    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi! this is Devrath</h1>
        <p className={classes.join(' ')}>I'm learning React.js</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Name</button>
        {persons}
      </div>
    );
  }

  
}

export default App;
