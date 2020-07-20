import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
	render() {
		return (
			// wrapping whole app in BrowserRouter allows us to use routing features anywhere inside this wrapping component
			<BrowserRouter>
				<div className='App'>
					<Blog />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;

// npm install --save react-router-dom
