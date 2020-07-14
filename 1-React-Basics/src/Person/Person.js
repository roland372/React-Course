// we need to import React to be able to translate/convert JSX to HTML
// when using functions, we don't need to import Component, we need them when we're using classes
import React from 'react';

// use props(properties) to access/grab arguments passed into Person component in App.js
const person = props => {
	return (
		// to execute dynamic code inside JSX and run it as JavaScript we wrap it inside {}
		// <p>I'm a person and I am {Math.floor(Math.random() * 30)} years old</p>

		<div>
			<p>
				{/* props.name to grab and use properties passed in App.js */}
				I'm a {props.name} and I am {props.age} years old
			</p>
			{/* props.children is a special property used to input something in between tags in our component, in our case hobbies */}
			<p>{props.children}</p>
		</div>
	);
};

// export a function as default to this file
export default person;
