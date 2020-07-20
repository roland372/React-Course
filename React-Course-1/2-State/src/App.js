import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	// components that are created by extending Component (class based components) can have special property called state, props are set and passed from outside like name and age in person component, state is managed from inside a component

	// if state is being changed it will tell React to rerender DOM

	// states are used to manage component internal data
	state = {
		// property - manage array of persons
		persons: [
			{ name: 'Roland', age: 26 },
			{ name: 'John', age: 16 },
			{ name: 'Bob', age: 2 },
		],
		otherState: 'some other value',
	};

	// class method to handle name change
	// pass newName as an argument to be able to change name on the fly
	switchNameHandler = newName => {
		// console.log('Clicked!');

		// manipulate state on click

		// we can't change state directly
		// this.state.persons[0].name = 'Rollend';

		// we should instead use setState method to update state and update the DOM

		// set state takes an object as an argument at will merge whatever we pass in with our existing state
		// when we pass persons, only persons will be changed, otherState will remain untoutched
		this.setState({
			persons: [
				{ name: newName, age: 26 },
				{ name: 'John', age: 16 },
				{ name: 'Bob', age: 222 },
			],
		});
	};

	// method to update name based on value passed inside input
	nameChangedHandler = event => {
		this.setState({
			persons: [
				{ name: 'Roland', age: 26 },
				// event.target.value will assign input value as a new name
				{ name: event.target.value, age: 16 },
				{ name: 'Bob', age: 2 },
			],
		});
	};

	render() {
		// inline styling
		const style = {
			backgroundColor: 'white',
			border: '1px solid blue',
			cursor: 'pointer',
			font: 'inherit',
			padding: '8px',
		};

		return (
			<div className='App'>
				<h1>hello from react</h1>
				{/* onclick to add an event listener, pass a class method to be executed after button is clicked */}

				<button
					// pass inline style
					style={style}
					//  different way other than using bind to pass arguments to a method/function
					onClick={() => this.switchNameHandler('New name')}
				>
					Switch Name
				</button>
				{/* to access state we output something inside {} in our components */}

				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
				/>

				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
					// we can pass reference to switchNameHandler as a property to our component, and now we can use this click property in Person.js

					//  we pass argument by calling bind(this is a reference to a method we're calling, and then argument that we want to pass)
					click={this.switchNameHandler.bind(this, 'Another New name')}
					// pass method to update name based on input
					changed={this.nameChangedHandler}

					// using bind if more efficient and clear when passing arguments
				>
					My hobbies: swimming
				</Person>
				<Person
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}
				/>

				{/* <Person name='Roland' age='26' />
				<Person name='John' age='16'>
					My hobbies: swimming
				</Person>
				<Person name='Bob' age='2' /> */}
			</div>
		);
	}
}

export default App;

// most of the time you should use functions instead of classes, because state with classes will make your app more unpredictible when it grows
