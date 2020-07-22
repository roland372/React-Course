import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

// used to add and update contacts
const ContactForm = () => {
	// initialize context - gives us an access to any methods or state
	const contactContext = useContext(ContactContext);

	// destructure context
	const { addContact, updateContact, clearCurrent, current } = contactContext;

	// we want to fill the from based on if there's anything in the 'current' state value
	// componentDidMount
	useEffect(
		() => {
			// if current state value is not empty
			if (current !== null) {
				// set contact to the 'current' object from a state
				// basically when we click edit, we want to populate the form with contact data that we just clicked on, and also change how the form will look like when we're editing contact
				setContact(current);
			}
			// else set it to it's default state
			else {
				setContact({
					name: '',
					email: '',
					phone: '',
					type: 'personal',
				});
			}
		},
		// we only want to run this when context or current value are changed
		[contactContext, current]
	);

	// contact - our initial state
	// setContact - function to update state
	const [contact, setContact] = useState({
		// define ContactForm state
		name: '',
		email: '',
		phone: '',
		// personal is default if no value is passed
		type: 'personal',
	});

	// destructure
	const { name, email, phone, type } = contact;

	// whatever we type inside input we want to put it in a specific place in a state
	// target specific item to change in a state
	const onChange = e =>
		// update state
		setContact({
			// copy whatever is in a current state
			...contact,
			// look for the value of name (name='name', name='email', etc. and update corresponding part of state)
			[e.target.name]:
				// that's the value of whatever we type in a input
				e.target.value,
		});

	// form submit handler
	const onSubmit = e => {
		e.preventDefault();

		// we want to have a different functionality depending if we're adding or editing a contact
		// if 'current' state is empty then we just want to add a new contact
		if (current === null) {
			// once form is submitted it's gonna look for addContact function, and we're passing contact as an argument
			addContact(contact);
		}
		// else we want to update a contact instead of adding a new one
		else {
			updateContact(contact);
		}
		// clear form and state back to default
		clearAll();

		// clear form fields after submitting
		setContact({
			name: '',
			email: '',
			phone: '',
			type: 'personal',
		});
	};

	// clear form and set 'current' state back to default
	const clearAll = () => {
		clearCurrent();
	};

	return (
		<form onSubmit={onSubmit}>
			<h2 className='text-primary'>
				{/* change text depending if we're adding or editing contact */}
				{current ? 'Edit Contact' : 'Add Contact'}
			</h2>
			<input
				type='text'
				placeholder='Name'
				name='name'
				value={name}
				onChange={onChange}
			/>
			<input
				type='email'
				placeholder='Email'
				name='email'
				value={email}
				onChange={onChange}
			/>
			<input
				type='text'
				placeholder='Phone'
				name='phone'
				value={phone}
				onChange={onChange}
			/>
			<h5>Contact Type</h5>
			<input
				type='radio'
				name='type'
				value='personal'
				// if type is personal(which is default) this radio will be checked
				checked={type === 'personal'}
				onChange={onChange}
			/>
			Personal{' '}
			<input
				type='radio'
				name='type'
				value='professional'
				// if type is professional(which is default) this radio will be checked
				checked={type === 'professional'}
				onChange={onChange}
			/>
			Professional
			<div>
				<input
					type='submit'
					//  change button value depending if we're adding or editing contact
					value={current ? 'Update Contact' : 'Add Contact'}
					className='btn btn-primary btn-block'
				/>
			</div>
			{/* if we're editing, show clear button, to clear our a form and set 'current' state back to default*/}
			{/* basically we'll cancel out editing */}
			{current ? (
				<div>
					<button className='btn btn-light btn-block' onClick={clearAll}>
						Clear
					</button>
				</div>
			) : null}
		</form>
	);
};

export default ContactForm;
