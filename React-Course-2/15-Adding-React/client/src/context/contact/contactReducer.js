import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
} from '../types';

// update state
export default (state, action) => {
	switch (action.type) {
		case ADD_CONTACT:
			return {
				// current state
				...state,
				// copy contacts from state, and add data from our payload into it
				contacts: [...state.contacts, action.payload],
			};
		case UPDATE_CONTACT:
			return {
				...state,
				contacts: state.contacts
					// loop over each contact and look for the specific contact, one that we're editing
					.map(
						contact =>
							// if id's are matching
							contact.id === action.payload.id
								? // return updated contact
								  action.payload
								: // else return contact just as it was before
								  contact
						// basically when we're editing a contact, and we click update, instead of creating a new one, we want to update existing contact
					),
			};
		case DELETE_CONTACT:
			return {
				...state,
				// filter out contact that we want to delete from ui
				contacts: state.contacts.filter(
					// return all contacts except the one that we're deleting
					contact => contact.id !== action.payload
				),
			};
		case SET_CURRENT:
			return {
				...state,
				// set current value to object containing all data of contact that we're selecting
				current: action.payload,
			};
		case CLEAR_CURRENT:
			return {
				...state,
				// set current back to null
				current: null,
			};
		case FILTER_CONTACTS:
			return {
				...state,
				// set filtered state to contacts that we will filter, depending on whatever is passed in a filter input
				filtered: state.contacts
					// loop over all contacts
					.filter(
						// for each contact
						contact => {
							// create new regular expression
							// g - global - match all characters no matter their position
							// i - case insensitive - match both lower and upper case
							const regex = new RegExp(`${action.payload}`, 'gi');
							// return anything where the name or email matches text that's passed in a filter input
							return contact.name.match(regex) || contact.email.match(regex);
						}
					),
			};
		case CLEAR_FILTER:
			return {
				...state,
				// set 'filtered' state back to null
				filtered: null,
			};
		// if nothing is updated return current state
		default:
			return state;
	}
};
