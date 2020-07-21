import React, { useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

// destructure
const Search = (
	{
		// searchUsers,
		// showClear,
		// clearUsers,
		// setAlert,
	}
) => {
	// use context
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);

	const [text, setText] = useState('');

	const onSubmit = e => {
		e.preventDefault();

		if (text === '') {
			// setAlert('Please enter something', 'light');
			alertContext.setAlert('Please enter something', 'light');
		} else {
			// searchUsers(text);
			githubContext.searchUsers(text);
			setText('');
		}
	};

	const onChange = e => {
		setText(e.target.value);
	};

	return (
		<div>
			<form onSubmit={onSubmit} className='form'>
				<input
					type='text'
					name='text'
					placeholder='Search Users...'
					value={text}
					onChange={onChange}
				/>
				<input
					type='submit'
					value='Search'
					className='btn btn-dark btn-block'
				/>
			</form>

			{/* {showClear */}
			{/* make sure that users array is not empty */}
			{githubContext.users.length > 0 ? (
				<button
					className='btn btn-light btn-block'
					onClick={githubContext.clearUsers}
				>
					Clear
				</button>
			) : null}
		</div>
	);
};

// Search.propTypes = {
// searchUsers: PropTypes.func.isRequired,
// clearUsers: PropTypes.func.isRequired,
// showClear: PropTypes.bool.isRequired,
// setAlert: PropTypes.func.isRequired,
// };

export default Search;
