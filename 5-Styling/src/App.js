import React, { Component } from 'react';
import classes from './App.module.css';
// import Radium, { StyleRoot } from 'radium';
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

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});

		const person = { ...this.state.persons[personIndex] };
		person.name = event.target.value;
		const persons = [...this.state.persons];
		persons[personIndex] = person;
		this.setState({
			persons: persons,
		});
	};

	deletePersonHandler = personIndex => {
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};

	render() {
		// const style = {
		// 	backgroundColor: 'green',
		// 	border: '1px solid blue',
		// 	color: 'white',
		// 	cursor: 'pointer',
		// 	font: 'inherit',
		// 	padding: '8px',
		// 	// pass hover properties
		// 	// ':hover': {
		// 	// 	backgroundColor: 'lightgreen',
		// 	// 	color: 'black',
		// 	// },
		// };

		let persons = null;
		let btnClass = '';

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person
								click={() => this.deletePersonHandler(index)}
								name={person.name}
								age={person.age}
								key={person.id}
								changed={event => this.nameChangedHandler(event, person.id)}
							/>
						);
					})}
				</div>
			);
			// change button background to red when we show persons list
			// initially it has green color, and change back to green when we hide it
			// style.backgroundColor = 'red';
			// style[':hover'] = {
			// 	backgroundColor: 'salmon',
			// 	color: 'black',
			// };

			btnClass = classes.Red;
		}

		// css class names
		// const classes = ['red', 'bold'].join(' '); // join - "red bold"
		const assignedClasses = [];
		// assign classes depending on how many persons we have
		if (this.state.persons.length <= 2) {
			// classes.push('red'); // classes = ['red']
			assignedClasses.push(classes.red); // classes = ['red']
		}
		if (this.state.persons.length <= 1) {
			// classes.push('bold'); // classes = ['red', 'bold']
			assignedClasses.push(classes.bold); // classes = ['red', 'bold']
		}

		return (
			// we wrap our whole app in StyleRoot to be able to work with media queries using Radium
			// <StyleRoot>
			// <div className='App'>
			<div className={classes.App}>
				<h1>hello from react</h1>
				<p className={assignedClasses.join(' ')}>howdy</p>
				<button
					className={btnClass}
					// style={style}
					onClick={this.togglePersonsHandler}
				>
					Toggle Persons
				</button>
				{persons}
			</div>
			// </StyleRoot>
		);
	}
}

// wrapping Radium around our App component will add extra functionality into it
// export default Radium(App);
export default App;

// radium is a react package that allow us to use sudo selectors like :hover and media queries with inline styles
// npm install --save radium
