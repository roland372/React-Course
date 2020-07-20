// rce + TAB
// create class based component with export at the bottom, component will be named after your file name

import React, { Component } from 'react';

// impt + TAB - import propTypes
import PropTypes from 'prop-types';

export class Navbar extends Component {
	// define default props in case we don't pass any, whatever props passed in component will overwrite those
	static defaultProps = {
		title: 'Github Finder',
		icon: 'fab fa-github',
	};

	// propTypes are used for prop checking, it will tell you if you passed correct prop type, like string, boolean, etc.
	static propTypes = {
		title: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
	};

	render() {
		return (
			<nav className='navbar bg-primary'>
				<h1>
					<i className={this.props.icon} />
					{/* this.props.title - in class based component access properties that are passed from App.js */}
					{this.props.title}
				</h1>
			</nav>
		);
	}
}

export default Navbar;
