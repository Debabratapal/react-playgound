import React, { Component } from 'react';
import  classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
    
    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
    }
    
    return (
      <div className={classes.App}>
        <Cockpit 
        appTitle={this.props.title}
        persons={this.state.persons}
        toggle={this.togglePersonsHandler}
        showPersons={this.state.showPersons}/>
        {persons}
      </div> 
    );
  }

  
}

export default App;
