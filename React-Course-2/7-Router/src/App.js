import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';

class App extends Component {
	state = {
		users: [],
		// single user
		user: {},
		// state to hold user repos
		repos: [],
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
	searchUsers = async text => {
		this.setState({ loading: true });

		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}}`
		);

		this.setState({
			users: res.data.items,
			loading: false,
		});
	};

	// Get single Github user
	getUser = async username => {
		this.setState({ loading: true });

		const res = await axios.get(
			// make a request to search for a user based on it's username
			`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}}`
		);

		this.setState({
			user: res.data,
			loading: false,
		});
	};

	// get users repos
	getUserRepos = async username => {
		this.setState({ loading: true });

		const res = await axios.get(
			// 5 repos per page, sort ascending by most recent ones
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}}`
		);

		this.setState({
			repos: res.data,
			loading: false,
		});
	};

	clearUsers = () => this.setState({ users: [], loading: false });

	setAlert = (msg, type) => {
		this.setState({ alert: { msg: msg, type: type } });

		setTimeout(() => this.setState({ alert: null }), 3000);
	};

	render() {
		const { users, user, repos, loading } = this.state;
		return (
			// to enable routing we need to wrap our Component in Router
			<Router>
				{/* we always want to render our navbar */}
				<div className='App'>
					<Navbar />
					<div className='container'>
						<Alert alert={this.state.alert} />
						{/* using switch we can enable switching between different pages within our app */}
						<Switch>
							{/* setup a home route */}
							<Route
								exact
								path='/'
								render={props => (
									<Fragment>
										<Search
											searchUsers={this.searchUsers}
											clearUsers={this.clearUsers}
											showClear={users.length > 0 ? true : false}
											setAlert={this.setAlert}
										/>
										<Users loading={loading} users={users} />
									</Fragment>
								)}
							/>
							{/* route to /about */}
							<Route exact path='/about' component={About} />
							{/* route to single user */}
							<Route
								exact
								path='/user/:login'
								render={props => (
									<User
										// pass all props
										{...props}
										// call method
										getUser={this.getUser}
										getUserRepos={this.getUserRepos}
										// pass user object filled with user data
										user={user}
										// pass repos state
										repos={repos}
										loading={loading}
									/>
								)}
							/>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;

// handle routing in our app
// npm install --save react-router-dom
