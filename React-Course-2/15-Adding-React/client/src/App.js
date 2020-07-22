import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactState from './context/contact/ContactState';
import './App.css';

const App = () => {
	return (
		// to enable routing, sorroud your whole app with Router component
		// to have access to our initial state we wrap our whole app with ContactState
		<ContactState>
			<Router>
				<Fragment>
					<Navbar />
					<div className='container'>
						{/* switch will render routes depending on what path we are */}
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/about' component={About} />
						</Switch>
					</div>
				</Fragment>
			</Router>
		</ContactState>
	);
};

export default App;

// "proxy": "http://localhost:5000" - when we make a request, we don't have to type that in a browser to get to a specific page like http://localhost:5000/api/users, we can type api/users instead

// install dependencies
// npm install axios react-router-dom uuid react-transition-group
