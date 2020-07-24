import React from 'react';
import AlertContext from '../../context/alert/alertContext';
import { useContext } from 'react';

const Alerts = () => {
	const alertContext = useContext(AlertContext);

	return (
		/* check if there are any alerts in an alerts array */
		alertContext.alerts.length > 0
			? alertContext.alerts
					// loop through alerts and output each one
					.map(alert => (
						<div
							key={alert.id}
							// class name will be dynamic depending on a type
							className={`alert alert-${alert.type}`}
						>
							<i className='fas fa-info circle'></i> {alert.msg}
						</div>
					))
			: null
	);
};

export default Alerts;
