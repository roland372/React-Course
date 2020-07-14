import React from 'react';
// import styling
import './Person.css';

const person = props => {
	return (
		<div className='Person'>
			{/* access click property from App.js */}
			<p onClick={props.click}>
				I'm a {props.name} and I am {props.age} years old
			</p>

			<p>{props.children}</p>
			{/* when we type something in input, we want to use it to update the name */}
			{/* onChange will be fired whenever value inside input is changed */}
			{/* props.changed - access passed property form App.js */}
			<input
				type='text'
				onChange={props.changed}
				// value will populate input will current name value
				value={props.name}
			/>
		</div>
	);
};

export default person;
