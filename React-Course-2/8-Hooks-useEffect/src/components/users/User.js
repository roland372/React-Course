import React, { Fragment, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ user, loading, getUser, getUserRepos, repos, match }) => {
	// componentDidMount
	useEffect(() => {
		getUser(match.params.login);
		getUserRepos(match.params.login);
		// use effect will run in a loop, so stop it we add [] at the end making it run only once, in [] we can define condidtion when to run when something changes, [repos] - this will run only when repos change

		// disable useless message saying to put dependencies in []
		// eslint-disable-next-line
	}, []);

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
	} = user;

	if (loading) return <Spinner />;

	return (
		<Fragment>
			<Link to='/' className='btn btn-light'>
				Back To Search
			</Link>
			Hireable:
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
				</div>
				<div>
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
};

User.propTypes = {
	loading: PropTypes.bool,
	user: PropTypes.object.isRequired,
	repos: PropTypes.array.isRequired,
	getUser: PropTypes.func.isRequired,
	getUserRepos: PropTypes.func.isRequired,
};

export default User;
