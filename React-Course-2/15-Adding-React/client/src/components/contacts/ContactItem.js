// single contact

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

// destructure single contact from Contacts.js
const ContactItem = ({ contact }) => {
	// initialize context
	const contactContext = useContext(ContactContext);

	// destructure context
	const { deleteContact, setCurrent, clearCurrent } = contactContext;

	// destructure contact props
	const { id, name, email, phone, type } = contact;

	// delete contact
	const onDelete = () => {
		// pass id as an argument
		deleteContact(id);
		// when we delete a contact, we also want re-set a current state back to null if it's the item that we were editing
		clearCurrent();
	};

	return (
		<div className='card bg-light'>
			<h3 className='text-primary text-left'>
				{name}{' '}
				<span
					style={{ float: 'right' }}
					// add class depending if type is professional or personal
					className={
						'badge ' +
						(type === 'professional' ? 'badge-success' : 'badge-primary')
					}
				>
					{type
						// make first letter to uppercase
						.charAt(0)
						.toUpperCase() +
						// add the rest without first letter
						type.slice(1)}
				</span>
			</h3>
			<ul className='list'>
				{/* check if there's an email and phone field */}
				{email ? (
					<li>
						<i className='fas fa-envelope-open' /> {email}
					</li>
				) : null}
				{phone ? (
					<li>
						<i className='fas fa-phone' /> {phone}
					</li>
				) : null}
			</ul>
			<p>
				<button
					className='btn btn-dark btn-sm'
					// set current contact in a state, to the one that we just clicked on
					onClick={() => setCurrent(contact)}
				>
					Edit
				</button>
				<button className='btn btn-danger btn-sm' onClick={onDelete}>
					Delete
				</button>
			</p>
		</div>
	);
};

ContactItem.propTypes = {
	contact: PropTypes.object.isRequired,
};

export default ContactItem;
