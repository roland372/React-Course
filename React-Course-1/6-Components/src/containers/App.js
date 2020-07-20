import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

class App extends Component {
	constructor(props) {
		super(props);
		console.log('[App.js] constructor');
	}

	state = {
		persons: [
			{ id: 'fdfdf', name: 'Roland', age: 26 },
			{ id: '111', name: 'John', age: 16 },
			{ id: '66565656', name: 'Bob', age: 2 },
		],
		otherState: 'some other value',
		showPersons: false,
		showCockpit: true,
		changeCounter: 0,
		authenticated: false,
	};

	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps', props);
		return state;
	}

	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[App.js] shouldComponentUpdate');
		// prevent update
		// return false;
		// allow update
		return true;
	}

	componentDidUpdate() {
		console.log('[App.js] componentDidUpdate');
	}

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});

		const person = { ...this.state.persons[personIndex] };
		person.name = event.target.value;
		const persons = [...this.state.persons];
		persons[personIndex] = person;
		this.setState((prevState, props) => {
			return {
				persons: persons,
				changeCounter: this.state.changeCounter + 1,
			};
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

	loginHandler = () => {
		this.setState({ authenticated: true });
	};

	render() {
		console.log('[App.js] render');
		let persons = null;
		// let btnClass = '';

		if (this.state.showPersons) {
			persons = (
				<Persons
					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.nameChangedHandler}
					isAuthenticated={this.state.authenticated}
				/>
			);

			// btnClass = classes.Red;
		}

		// const assignedClasses = [];
		// if (this.state.persons.length <= 2) {
		// 	assignedClasses.push(classes.red); // classes = ['red']
		// }
		// if (this.state.persons.length <= 1) {
		// 	assignedClasses.push(classes.bold); // classes = ['red', 'bold']
		// }

		return (
			<Aux>
				<button
					onClick={() => {
						this.setState({ showCockpit: false });
					}}
				>
					Remove Cockpit
				</button>
				<AuthContext.Provider
					value={{
						authenticated: this.state.authenticated,
						login: this.loginHandler,
					}}
				>
					{this.state.showCockpit ? (
						<Cockpit
							title={this.props.appTitle}
							showPersons={this.state.showPersons}
							personsLength={this.state.persons.length}
							clicked={this.togglePersonsHandler}
						/>
					) : null}
					{/* <h1>hello from react</h1>
				<p className={assignedClasses.join(' ')}>howdy</p>
				<button className={btnClass} onClick={this.togglePersonsHandler}>
					Toggle Persons
				</button> */}
					{persons}
				</AuthContext.Provider>
			</Aux>
		);
	}
}

export default withClass(App, classes.App);

// npm install --save prop-types
