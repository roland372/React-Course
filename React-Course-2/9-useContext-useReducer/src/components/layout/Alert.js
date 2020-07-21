import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
	// initialize context
	const alertContext = useContext(AlertContext);

	// destructure
	const { alert } = alertContext;

	return alert !== null ? (
		<div className={`alert alert-${alert.type}`}>
			<i className='fas fa-info-circle'></i> {alert.msg}
		</div>
	) : null;
};

export default Alert;
