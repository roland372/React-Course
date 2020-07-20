import React from 'react';
import PropTypes from 'prop-types';

// destructure props
const Navbar = ({ icon, title }) => {
	// const Navbar = props => {
	return (
		<nav className='navbar bg-primary'>
			<h1>
				{/* <i className={props.icon} />
				{props.title} */}
				<i className={icon} />
				{title}
			</h1>
		</nav>
	);
};

// using default props and propTypes with functional component
Navbar.defaultProps = {
	title: 'Github Finder',
	icon: 'fab fa-github',
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

export default Navbar;
