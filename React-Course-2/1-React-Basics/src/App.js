import React, { Component } from 'react';
import './App.css';

class App extends Component {
	// foo = () => 'Bars';

	render() {
		const name = 'John Doe';
		// const foo = () => 'Bar';

		const loading = false;
		const showName = true;

		// if statements
		// if (loading) {
		// 	return <h4>Loading...</h4>;
		// }

		return (
			<div className='App'>
				{/* <h1>hello {name.toUpperCase()}</h1> */}
				{/* <h1>hello {foo()}</h1> */}
				{/* <h1>hello {this.foo()}</h1> */}

				{/* if statement */}
				{loading ? (
					<h4>Loading...</h4>
				) : (
					<h1>hello {showName ? name : null}</h1>
				)}
			</div>
		);

		// JSX
		// return (
		// 	<div className='App'>
		// 		<h1>hello from react</h1>
		// 	</div>
		// );

		// without JSX
		// return React.createElement(
		// 	'div',
		// 	{ className: 'App' },
		// 	React.createElement('h1', null, 'hello from react')
		// );
	}
}

export default App;
