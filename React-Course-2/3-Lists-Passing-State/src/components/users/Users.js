import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
	state = {
		// hardcode users
		users: [
			{
				id: '1',
				login: 'mojombo',
				avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
				html_url: 'https://github.com/mojombo',
			},
			{
				id: '2',
				login: 'defunkt',
				avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
				html_url: 'https://github.com/defunkt',
			},
			{
				id: '3',
				login: 'pjhyett',
				avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
				html_url: 'https://github.com/pjhyett',
			},
		],
	};
	render() {
		return (
			// pass style object
			<div style={userStyle}>
				{/* loop through users array from state and create a list based on it */}
				{this.state.users.map(
					// for each user create a component and pass properties
					user => (
						<UserItem key={user.id} user={user} />
					)
				)}
			</div>
		);
	}
}

// create a style for users
const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gap: '1rem',
};

export default Users;
