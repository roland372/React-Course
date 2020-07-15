import React from 'react';
// import Radium from 'radium';
import classes from './Person.module.css';

const person = props => {
	// // using Radium
	// const style = {
	// 	// media queries using Radium
	// 	'@media(min-width: 500px)': {
	// 		width: '450px',
	// 	},
	// };

	return (
		// with Radium
		// <div className='Person' style={style}>
		// <div className='Person'>
		<div className={classes.Person}>
			<p onClick={props.click}>
				I'm a {props.name} and I am {props.age} years old
			</p>

			<p>{props.children}</p>
			<input type='text' onChange={props.changed} value={props.name} />
		</div>
	);
};

// export default Radium(person);
export default person;
