import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = props =>
	props.show ? (
		// if show property is true, display div
		<div className={classes.Backdrop} onClick={props.clicked}></div>
	) : // else display nothing
	null;

export default backdrop;
