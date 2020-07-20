import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

// destructure - pull out users and loading from props
const Users = ({ users, loading }) => {
	// if loading is true, we're fetching the users data
	if (loading) {
		// render spinner
		return <Spinner />;
	} else {
		// else render UserItem component with props
		return (
			<div style={userStyle}>
				{/* use this.props instead of this.state, because in here we don't have any state to get data from, were grabing data from props passed in App.js */}
				{users.map(user => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
};

Users.propTypes = {
	// ptar + TAB
	users: PropTypes.array.isRequired,
	// ptbr + TAB
	loading: PropTypes.bool.isRequired,
};

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gap: '1rem',
};

export default Users;
