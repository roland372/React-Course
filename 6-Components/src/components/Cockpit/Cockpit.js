import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';
import authContext from '../../context/auth-context';

const Cockpit = props => {
	const toggleBtnRef = useRef(null);
	const authContext = useContext(AuthContext);
	console.log(authContext.authenticated);

	useEffect(
		() => {
			console.log('[Cockpit.js] useEffect');
			// Http request...
			// setTimeout(() => {
			// 	// alert('Saved data to cloud');
			// }, 1000);
			toggleBtnRef.current.click();
			// this will run after every render cycle
			return () => {
				console.log('[Cockpit.js] cleanup work in useEffect');
			};
		},
		// execute useEffect only when our persons change
		// [props.persons]

		// run useEffect only one time when page renders
		[]
	);

	useEffect(() => {
		console.log('[Cockpit.js] 2nd useEffect');
		return () => {
			console.log('[Cockpit.js] cleanup work in 2nd useEffect');
		};
	});

	const assignedClasses = [];
	let btnClass = '';

	if (props.showPersons) {
		btnClass = classes.Red;
	}

	if (props.personsLength <= 2) {
		assignedClasses.push(classes.red); // classes = ['red']
	}
	if (props.personsLength <= 1) {
		assignedClasses.push(classes.bold); // classes = ['red', 'bold']
	}

	return (
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
			<p className={assignedClasses.join(' ')}>howdy</p>
			<button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
				Toggle Persons
			</button>
			<button onClick={authContext.login}>Log in</button>
		</div>
	);
};

export default React.memo(Cockpit);