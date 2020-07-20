// import useState to use hooks
// this will allow us to manage state in functional components
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// functional component
const App = props => {
	// useState will always return an array with 2 elemements
	// 1 - current state or updated
	// 2 - function that allows us update state

	// with destructuring [] we can grab the properties
	// personsState gives us an access to persons object
	// setPersonState will be function to be executed to update state
	const [personsState, setPersonsState] = useState({
		persons: [
			{ name: 'Roland', age: 26 },
			{ name: 'John', age: 16 },
			{ name: 'Bob', age: 2 },
		],
		// otherState: 'some other value',
	});

	// we can call useState to pass other state instead of manually passing it everytime when we update our state
	const [otherState, setOtherState] = useState('some other value');

	console.log(personsState, otherState);

	// our function does not merge whatever we pass to set state, instead it will overwrite/replace it, if we don't pass otherState, it will be gone
	const switchNameHandler = () => {
		setPersonsState({
			persons: [
				{ name: 'Rollend', age: 26 },
				{ name: 'John', age: 16 },
				{ name: 'Bob', age: 222 },
			],
			// even if we're not changing otherState we have to include it, so it wont be removed
			// otherState: personsState.otherState,
		});
	};

	return (
		<div className='App'>
			<h1>hello from react</h1>

			{/* we don't use class anymore so we don't have to user 'this' to call a method */}
			<button onClick={switchNameHandler}>Switch Name</button>

			<Person
				name={personsState.persons[0].name}
				age={personsState.persons[0].age}
			/>
			<Person
				name={personsState.persons[1].name}
				age={personsState.persons[1].age}
			>
				My hobbies: swimming
			</Person>
			<Person
				name={personsState.persons[2].name}
				age={personsState.persons[2].age}
			/>
		</div>
	);
};

export default App;
