import React from 'react';
import classes from './NavigationItem.module.css';

const navigationItem = props => (
	<li className={classes.NavigationItem}>
		<a
			href={props.link}
			className={
				props.active
					? // set active class to highlight nav item
					  classes.active
					: null
			}
		>
			{props.children}
		</a>
	</li>
);

export default navigationItem;
