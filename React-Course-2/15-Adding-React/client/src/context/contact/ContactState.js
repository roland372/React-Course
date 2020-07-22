import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
} from '../types';
// import contactContext from './contactContext';

// create initial state
const ContactState = props => {
	const initialState = {
		// here we will make a request to our backend to fill these contacts with data
		// contacts: [],
		contacts: [
			{
				id: 1,
				name: 'John',
				email: 'john@gmail.com',
				phone: '123 123 123',
				type: 'personal',
			},
			{
				id: 2,
				name: 'Jane',
				email: 'jane@gmail.com',
				phone: '333 333 333',
				type: 'personal',
			},
			{
				id: 3,
				name: 'Mike',
				email: 'mike@gmail.com',
				phone: '222 222 222',
				type: 'professional',
			},
		],
		// when we click edit contact, we want to put that specifc contact to that part of state
		current: null,

		// state to filter our contacts, we'll put an array of contacts that match our filter
		filtered: null,
	};

	// state - access anything in our state
	// dispatch - dispatch objects to reducer
	// pull things from our contactReducer and pass our initial state
	const [state, dispatch] = useReducer(contactReducer, initialState);

	// Add contact
	const addContact = contact => {
		// for now generate random id for out contact
		contact.id = uuid();

		dispatch({
			// pass type to handle it in our reducer
			type: ADD_CONTACT,
			// data that we want to pass
			payload: contact,
		});
	};

	// Delete contact
	const deleteContact = id => {
		dispatch({
			// pass type to handle it in our reducer
			type: DELETE_CONTACT,
			// data that we want to pass
			payload: id,
		});
	};

	// Set current contact
	const setCurrent = contact => {
		dispatch({
			// pass type to handle it in our reducer
			type: SET_CURRENT,
			// data that we want to pass
			payload: contact,
		});
	};

	// Clear current contact back to null
	const clearCurrent = () => {
		dispatch({
			// pass type to handle it in our reducer
			type: CLEAR_CURRENT,
		});
	};

	// Update contact
	const updateContact = contact => {
		dispatch({
			// pass type to handle it in our reducer
			type: UPDATE_CONTACT,
			// data that we want to pass
			payload: contact,
		});
	};

	// Filter contacts
	const filterContacts = text => {
		dispatch({
			// pass type to handle it in our reducer
			type: FILTER_CONTACTS,
			// data that we want to pass
			payload: text,
		});
	};

	// Clear filter - set filtered state back to null
	const clearFilter = () => {
		dispatch({
			// pass type to handle it in our reducer
			type: CLEAR_FILTER,
		});
	};

	// return provider so we can wrap our whole app with this context
	return (
		<ContactContext.Provider
			// pass anything that we want to be able to access from other components like state or methods
			value={{
				contacts: state.contacts,
				current: state.current,
				filtered: state.filtered,
				addContact,
				deleteContact,
				setCurrent,
				clearCurrent,
				updateContact,
				filterContacts,
				clearFilter,
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
