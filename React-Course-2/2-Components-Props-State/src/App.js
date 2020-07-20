import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className='App'>
				{/* we're not passing any props here, default ones defined in Navbar Component will be used */}
				<Navbar />
				<UserItem />

				{/* <Navbar title='Github Finder' icon='fab fa-github' /> */}
			</div>
		);
	}
}

export default App;
