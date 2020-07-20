import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class User extends Component {
	// this fires right away when component it loaded
	componentDidMount() {
		// grab user param from url - /user/:login
		this.props.getUser(this.props.match.params.login);

		this.props.getUserRepos(this.props.match.params.login);
	}

	static propTypes = {
		loading: PropTypes.bool,
		user: PropTypes.object.isRequired,
		repos: PropTypes.array.isRequired,
		getUser: PropTypes.func.isRequired,
		getUserRepos: PropTypes.func.isRequired,
	};

	render() {
		// pull props from user object that's in a state in App.js
		const {
			name,
			company,
			avatar_url,
			location,
			bio,
			blog,
			login,
			html_url,
			followers,
			following,
			public_repos,
			public_gists,
			hireable,
		} = this.props.user;

		const { loading, repos } = this.props;

		// render spinner if we're fetching data
		if (loading) return <Spinner />;

		return (
			<Fragment>
				<Link to='/' className='btn btn-light'>
					Back To Search
				</Link>
				Hireable: {/* display an icon depending if user is hireable or not */}
				{hireable ? (
					<i className='fas fa-check text-success' />
				) : (
					<i className='fas fa-times-circle text-danger' />
				)}
				<div className='card grid-2'>
					<div className='all-center'>
						<img
							src={avatar_url}
							className='round-img'
							style={{ width: '150px' }}
							alt='avatar'
						/>
						<h1>{name}</h1>
						{location ? <p>Location {location}</p> : null}
						{/* <p>Location: {location}</p> */}
					</div>
					<div>
						{/* display bio if user has one */}
						{bio ? (
							<Fragment>
								<h3>Bio</h3>
								<p>{bio}</p>
							</Fragment>
						) : null}
						<a href={html_url} className='btn btn-dark my-1'>
							Visit Github Profile
						</a>
						<ul>
							<li>
								{login ? (
									<Fragment>
										<strong>Username: </strong> {login}
									</Fragment>
								) : null}
							</li>
							<li>
								{company ? (
									<Fragment>
										<strong>Company: </strong> {company}
									</Fragment>
								) : null}
							</li>
							<li>
								{blog ? (
									<Fragment>
										<strong>Website: </strong> {blog}
									</Fragment>
								) : null}
							</li>
						</ul>
					</div>
				</div>
				<div className='card text-center'>
					<div className='badge badge-primary'>Followers: {followers}</div>
					<div className='badge badge-success'>Following: {following}</div>
					<div className='badge badge-light'>Public Repos: {public_repos}</div>
					<div className='badge badge-dark'>Public Gists: {public_gists}</div>
				</div>
				<Repos repos={repos} />
			</Fragment>
		);
	}
}

export default User;
