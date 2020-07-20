import React from 'react';

// destructure alert grabbing msg and type
const Alert = ({ alert }) => {
	return (
		// make sure that alert is not null, we don't want to show empty background
		alert !== null ? (
			// class will be (alert alert-light)
			<div className={`alert alert-${alert.type}`}>
				<i className='fas fa-info-circle'></i> {alert.msg}
			</div>
		) : // else show nothing
		null
	);
};

export default Alert;
