import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

// create initial state
const AlertState = props => {
	const initialState = null;
	// useReducer is alternative to useState
	const [state, dispatch] = useReducer(AlertReducer, initialState);

	// Set Alert
	const setAlert = (msg, type) => {
		// setAlert({ msg: msg, type: type });
		dispatch({
			type: SET_ALERT,
			payload: { msg, type },
		});

		// setTimeout(() => setAlert(null), 3000);
		setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
	};

	return (
		<AlertContext.Provider
			value={{
				// pass whatever we want to be avalaible to the whole app
				alert: state,
				setAlert,
			}}
		>
			{props.children}
		</AlertContext.Provider>
	);
};

export default AlertState;
