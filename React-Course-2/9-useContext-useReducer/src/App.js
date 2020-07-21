import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
// import axios from 'axios';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
	// const [users, setUsers] = useState([]);
	// const [user, setUser] = useState({});
	// const [repos, setRepos] = useState([]);
	// const [loading, setLoading] = useState(false);
	// const [alert, setAlert] = useState(null);

	return (
		<GithubState>
			<AlertState>
				<Router>
					<div className='App'>
						<Navbar />
						<div className='container'>
							<Alert
							//  alert={alert}
							/>
							<Switch>
								<Route
									exact
									path='/'
									render={props => (
										<Fragment>
											<Search
											// searchUsers={searchUsers}
											// clearUsers={clearUsers}
											// showClear={users.length > 0 ? true : false}
											// setAlert={showAlert}
											/>
											<Users
											//  loading={loading}
											//   users={users}
											/>
										</Fragment>
									)}
								/>
								<Route exact path='/about' component={About} />
								<Route
									exact
									path='/user/:login'
									component={User}
									// render={props => (
									// <User
									// {...props}
									// getUser={getUser}
									// getUserRepos={getUserRepos}
									// user={user}
									// repos={repos}
									// loading={loading}
									// />
									// )}
								/>
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);
};

export default App;
