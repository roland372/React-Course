import React, { useState } from 'react';
import PropTypes from 'prop-types';

// destructure
const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
	// state
	// [state, method to change the state]
	// (default value)
	const [text, setText] = useState('');

	const onSubmit = e => {
		e.preventDefault();

		if (text === '') {
			setAlert('Please enter something', 'light');
		} else {
			searchUsers(text);
			// this.setState({ text: '' });
			setText('');
		}
	};

	const onChange = e => {
		// pass value whatever to set our state to
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

			{showClear ? (
				<button className='btn btn-light btn-block' onClick={clearUsers}>
					Clear
				</button>
			) : null}
		</div>
	);
};

Search.propTypes = {
	searchUsers: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired,
};

export default Search;
