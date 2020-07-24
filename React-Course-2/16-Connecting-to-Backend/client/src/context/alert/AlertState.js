import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
	// array of alerts
	const initialState = [];

	const [state, dispatch] = useReducer(alertReducer, initialState);

	// Set Alert
	const setAlert = (msg, type, timeout = 3000) => {
		// generate random id
		const id = uuid();
		dispatch({
			type: SET_ALERT,
			payload: { msg, type, id },
		});

		// remove alert after x seconds
		setTimeout(
			() =>
				dispatch({
					type: REMOVE_ALERT,
					// we need to know which alert to remove
					payload: id,
				}),
			timeout
		);
	};

	return (
		<AlertContext.Provider
			// pass anything that we want to be able to access from other components like state or methods
			value={{
				alerts: state,
				setAlert,
			}}
		>
			{props.children}
		</AlertContext.Provider>
	);
};

export default AlertState;
