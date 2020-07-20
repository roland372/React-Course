import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
	state = {
		// initial users array, we will push data into it once we fetch it from a server
		users: [],
		// there will be small delay while we're fetching a data, so in the meantime we want to display loader
		loading: false,
	};

	// this lifecycle method will run when our App.js component will mount
	// here we usually will make http request to some server or api
	async componentDidMount() {
		// console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
		// console.log(123);

		// we can't directly change state
		// this.state.loading = true;

		// { pass what part of state we want to change }
		// while we're fetching data show loader
		this.setState({ loading: true });

		// make a get request to github api
		// with process.env we can use enviromental variables
		// we're using them from our github api that we created so that we don't run out of requests when fetching data
		const res = await axios.get(
			`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}}`
		);

		// we want to put users that come with res.data into our app component state
		// console.log(res.data);

		// after we get data from state we want to update state
		this.setState({
			// push fetched users into our array in state
			users: res.data,
			// and hide loader
			loading: false,
		});
	}

	render() {
		return (
			<div className='App'>
				<Navbar />
				<div className='container'>
					{/* pass props to Users Component */}
					<Users loading={this.state.loading} users={this.state.users} />
				</div>
			</div>
		);
	}
}

export default App;

// easier way of making http requests
// npm install --save axios
