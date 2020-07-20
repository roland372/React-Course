import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
	// state for search input
	state = {
		text: '',
	};

	static propTypes = {
		searchUsers: PropTypes.func.isRequired,
		clearUsers: PropTypes.func.isRequired,
		showClear: PropTypes.bool.isRequired,
		setAlert: PropTypes.func.isRequired,
	};

	onSubmit = e => {
		// prevent form from submitting
		e.preventDefault();

		// if input is empty
		if (this.state.text === '') {
			// launch a function informing user that input is empty
			// setAlert(message, type)
			this.props.setAlert('Please enter something', 'light');
		} else {
			// console.log(this.state.text);

			// pass search value into our App.js as an argument for a function, so that we can use it to search for a specific user

			// after we submit, we're calling searchUsers function in App Component, and we're passing text state as an argument
			this.props.searchUsers(this.state.text);

			// clear form after submitting
			this.setState({ text: '' });
		}
	};

	// when we type something in input
	onChange = e => {
		// we want to update state to whatever value is entered inside an input
		// console.log(e.target.value);
		// this.setState({ text: e.target.value });

		// little trick to use whatever is inside a name property, in our case it's value is text, but if it were to change to email for example it would automatically use email value
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		// add destructuring
		const { showClear, clearUsers } = this.props;

		return (
			<div>
				<form onSubmit={this.onSubmit} className='form'>
					<input
						type='text'
						name='text'
						placeholder='Search Users...'
						value={this.state.text}
						onChange={this.onChange}
					/>
					<input
						type='submit'
						value='Search'
						className='btn btn-dark btn-block'
					/>
				</form>

				{showClear ? (
					// if this.props.showClear value is true then we want to show clear button
					<button className='btn btn-light btn-block' onClick={clearUsers}>
						Clear
					</button>
				) : // else, we don't duuh
				null}
			</div>
		);
	}
}

export default Search;
