import React from 'react';
import PropTypes from 'prop-types';

// now that we're not using class components, we pass props as an argument
// const UserItem = props => {

// we can destructure here instead, pull properties from user
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
	// and we don't need 'this' before props
	// const { login, avatar_url, html_url } = props.user;

	return (
		<div className='card text-center'>
			<img
				src={avatar_url}
				alt=''
				className='round-img'
				style={{ width: '60px' }}
			/>
			<h3>{login}</h3>
			<div>
				<a href={html_url} className='btn btn-dark btn-sm my-1'>
					More
				</a>
			</div>
		</div>
	);
};

// set propTypes
UserItem.propTypes = {
	// ptor + TAB - will type it out for us PropTypes.object.isRequired
	user: PropTypes.object.isRequired,
};

export default UserItem;
