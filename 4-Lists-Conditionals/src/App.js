import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ id: 'fdfdf', name: 'Roland', age: 26 },
			{ id: '111', name: 'John', age: 16 },
			{ id: '66565656', name: 'Bob', age: 2 },
		],
		otherState: 'some other value',
		showPersons: false,
	};

	// switchNameHandler = newName => {
	// 	this.setState({
	// 		persons: [
	// 			{ name: newName, age: 26 },
	// 			{ name: 'John', age: 16 },
	// 			{ name: 'Bob', age: 222 },
	// 		],
	// 	});
	// };

	nameChangedHandler = (event, id) => {
		// update the state but only on the person in which input we typed
		// find that single person
		const personIndex = this.state.persons.findIndex(p => {
			// return this person if index of person in an array matches an id that we recieve as an argument
			return p.id === id;
		});

		// grab person and access it's index based on the index that we find using findIndex
		// {...} using spread operator make a copy of original persons state
		const person = { ...this.state.persons[personIndex] };

		// update person name
		// set it to input value
		person.name = event.target.value;

		// get persons state
		const persons = [...this.state.persons];

		// update persons state
		persons[personIndex] = person;

		// set updated state
		this.setState({
			persons: persons,

			// old hardcoded way
			// persons: [
			// 	{ name: 'Roland', age: 26 },
			// 	{ name: event.target.value, age: 16 },
			// 	{ name: 'Bob', age: 2 },
			// ],
		});
	};

	// delete a person from array of persons when we click a paragraph on that person
	deletePersonHandler = personIndex => {
		// grab all persons - this will grab original state

		// slice() will copy original array
		// const persons = this.state.persons.slice();

		// alternative approach to copy array
		// [...] this will spread elements of the original array and add them to a new array making a copy of it
		const persons = [...this.state.persons];

		// both methods work the same way, using spread is more modern way of copying an array

		// create new version of that persons array
		// splice will remove one element from an array
		persons.splice(personIndex, 1);
		// update state with new version of persons array
		this.setState({ persons: persons });
	};

	// method to toggle persons
	togglePersonsHandler = () => {
		// access show persons state
		const doesShow = this.state.showPersons;
		// set state of show persons, to the oposite value, it it's true set to false, false to true
		// state is only being updated/merged, not overwritten
		this.setState({ showPersons: !doesShow });
	};

	render() {
		const style = {
			backgroundColor: 'white',
			border: '1px solid blue',
			cursor: 'pointer',
			font: 'inherit',
			padding: '8px',
		};

		// we should handle conditions before we return something
		// initial default value - we don't show persons
		let persons = null;

		// if show persons state is true
		if (this.state.showPersons) {
			// then set persons to div that will render them
			persons = (
				<div>
					{/* render persons array from state */}
					{/* loop over persons array in state */}
					{/* we're grabbing index so we can find out what person we want to delete based on it's index */}
					{this.state.persons.map((person, index) => {
						// this will be executed on every element in persons array in state
						// return person component and pass properties into it
						return (
							<Person
								// method to delete person, pass index into it
								click={() => this.deletePersonHandler(index)}
								// properties
								name={person.name}
								age={person.age}
								// key property helps update React lists more efficiently, so it knows what to render and what to update, and should always be assigned
								// key has to be have unique value, when we get an items from database they will have unique id's so we would usually use that
								key={person.id}
								// on input change execute method
								changed={event => this.nameChangedHandler(event, person.id)}
							/>
						);
					})}

					{/* old way of rednering persons list */}
					{/* <Person
						name={this.state.persons[0].name}
						age={this.state.persons[0].age}
					/>

					<Person
						name={this.state.persons[1].name}
						age={this.state.persons[1].age}
						click={this.switchNameHandler.bind(this, 'Another New name')}
						changed={this.nameChangedHandler}
					>
						My hobbies: swimming
					</Person>
					<Person
						name={this.state.persons[2].name}
						age={this.state.persons[2].age}
					/> */}
				</div>
			);
		}

		return (
			<div className='App'>
				<h1>hello from react</h1>
				<button style={style} onClick={this.togglePersonsHandler}>
					Toggle Persons
				</button>

				{/* check if showPersons is true
				{this.state.showPersons ? (
					// if it's true, then render this div containing all persons
					<div>
						<Person
							name={this.state.persons[0].name}
							age={this.state.persons[0].age}
						/>

						<Person
							name={this.state.persons[1].name}
							age={this.state.persons[1].age}
							click={this.switchNameHandler.bind(this, 'Another New name')}
							changed={this.nameChangedHandler}
						>
							My hobbies: swimming
						</Person>
						<Person
							name={this.state.persons[2].name}
							age={this.state.persons[2].age}
						/>
					</div>
				) : // else if it's false render nothing
				null} */}

				{/* output persons here if the condition is true */}
				{persons}
			</div>
		);
	}
}

export default App;
