import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import axios from 'axios';
import './App.css';

class App extends Component {
	state = {
		users: [],
		loading: false,
		alert: null,
	};

	// async componentDidMount() {
	// 	this.setState({ loading: true });
	// 	const res = await axios.get(
	// 		`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}}`
	// 	);

	// 	this.setState({
	// 		users: res.data,
	// 		loading: false,
	// 	});
	// }

	// Search Github users
	// text = this.state.text from Search Component
	searchUsers = async text => {
		this.setState({ loading: true });
		// console.log(text);

		const res = await axios.get(
			// pass text as an endpoint to search specific user
			`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}}`
		);

		// console.log(res.data);
		// console.log(res.data.items);

		this.setState({
			// items - because data now will contain different things that has to do with pagination etc.
			users: res.data.items,
			loading: false,
		});
	};

	// method to clear users from a state
	clearUsers = () => this.setState({ users: [], loading: false });

	// display alert informing user about empty input
	setAlert = (msg, type) => {
		this.setState({ alert: { msg: msg, type: type } });

		// hide alert after x seconds
		setTimeout(() => this.setState({ alert: null }), 3000);
	};

	render() {
		// add destructuring
		const { users, loading } = this.state;
		return (
			<div className='App'>
				<Navbar />
				<div className='container'>
					{/* pass props from state */}
					<Alert alert={this.state.alert} />
					{/* grab props from Search Component */}
					<Search
						searchUsers={this.searchUsers}
						clearUsers={this.clearUsers}
						// pass showClear prop to Search Component, we want to show clear button only if we're displaying the users
						showClear={users.length > 0 ? true : false}
						setAlert={this.setAlert}
					/>
					<Users loading={loading} users={users} />
				</div>
			</div>
		);
	}
}

export default App;
