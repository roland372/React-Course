import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
	return (
		<nav className='navbar bg-primary'>
			<h1>
				<i className={icon} />
				{title}
			</h1>
			<ul>
				<li>
					{/* to route to a page within our app we want to use Link instead of a tag, a tag will refresh the page not saving our state, with Link our state is preserved */}
					{/* <a href='/'>Home</a> */}
					<Link to='/'>Home</Link>
				</li>
				<li>
					{/* <a href='/about'>About</a> */}
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</nav>
	);
};

Navbar.defaultProps = {
	title: 'Github Finder',
	icon: 'fab fa-github',
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

export default Navbar;
