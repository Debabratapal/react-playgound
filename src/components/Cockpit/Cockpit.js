import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    let AssignClasses = []
    let btnClass = '';
    
    if(props.showPersons) {
        btnClass = classes.Red;  
    }


    if(props.persons.length <=2) {
      AssignClasses.push(classes.red);
    }

    if(props.persons.length <= 1) {
      AssignClasses.push(classes.bold);
    }
    return(
        <div className={classes.Cockpit}>
            <h1>hi! {props.appTitle}</h1>
            <p className={AssignClasses.join(' ')}>I'm learning React.js</p>
            <button 
            className= {btnClass}
            onClick={props.toggle}>Toggle Name</button>
        </div>
    );
};

export default cockpit;