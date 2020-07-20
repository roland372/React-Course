import React, { Component } from 'react';

class UserItem extends Component {
	// one way to define the state
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		id: 'id',
	// 		login: 'mojombo',
	// 		avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
	// 		html_url: 'https://github.com/mojombo',
	// 	};
	// }

	// another way to define the state
	state = {
		id: 'id',
		login: 'mojombo',
		avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
		html_url: 'https://github.com/mojombo',
	};

	render() {
		// {} - signifies that we're pulling stuff from object
		const { login, avatar_url, html_url } = this.state;

		return (
			// output state with destructuring
			<div className='card text-center'>
				<img
					// output state
					src={avatar_url}
					alt=''
					className='round-img'
					// inline styling
					style={{ width: '60px' }}
				/>
				<h3>{login}</h3>
				<div>
					<a href={html_url} className='btn btn-dark btn-sm my-1'>
						More
					</a>
				</div>
			</div>

			// output without destructuring
			// <div className='card text-center'>
			// 	<img
			// 		// output state
			// 		src={this.state.avatar_url}
			// 		alt=''
			// 		className='round-img'
			// 		// inline styling
			// 		style={{ width: '60px' }}
			// 	/>
			// 	<h3>{this.state.login}</h3>
			// 	<div>
			// 		<a href={this.state.html_url} className='btn btn-dark btn-sm my-1'>
			// 			More
			// 		</a>
			// 	</div>
			// </div>
		);
	}
}

export default UserItem;
