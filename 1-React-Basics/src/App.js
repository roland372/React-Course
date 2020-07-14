import React, { Component } from 'react';
import './App.css';
// import person component
import Person from './Person/Person';

// class App extends Component {
// 	render() {
// 		return (
// 			// our JSX expression can have only one root element div in our case, we usually nest all elements that we want to return inside that root div
// 			<div className='App'>
// 				<h1>hello from react</h1>
// 				<p>this will work</p>
// 			</div>
// 			// we can't return anything outside our div
// 			// <p>this will not work</p>
// 		);

// 		// code above (JSX) is compiled to what we'll write in example below

// 		// createElement
// 		// (element we want to render to DOM,
// 		// configuration (can be null) you can pass className for example,
// 		// any amount of children (meaning what's nested inside the first argument in our case 'div', we can pass any amount of children that we want to render))

// 		// return React.createElement('div', null, 'h1', `hello from react`);

// 		// return React.createElement(
// 		// 	'div',
// 		// 	{ className: 'App' },
// 		// 	React.createElement('h1', null, 'hello from react')
// 		// );
// 	}
// }

class App extends Component {
	render() {
		return (
			<div className='App'>
				<h1>hello from react</h1>
				{/* we can use self closing tag / if we're not nesting anything in between*/}
				{/* pass attributes/properties to Person component */}
				<Person name='Roland' age='26' />
				<Person name='John' age='16'>
					My hobbies: swimming
				</Person>
				<Person name='Bob' age='2' />
			</div>
		);
	}
}

export default App;
