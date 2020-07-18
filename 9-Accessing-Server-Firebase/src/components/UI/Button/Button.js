import React from 'react';
import classes from './Button.module.css';

const button = props => (
	<button
		// we always want to assign Button class, but also contitionally Danger or Success too
		className={[
			classes.Button,
			// btnType will be Danger or Success
			classes[props.btnType],
		]
			// with join we will turn this array into a string
			.join(' ')}
		onClick={props.clicked}
	>
		{props.children}
	</button>
);

export default button;
