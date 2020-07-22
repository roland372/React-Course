// pull contacts from the state, loop through them, create a list and output ContactItem for each one
import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
	// initialize context - this will give us access to any state and methods that are in this context
	const contactContext = useContext(ContactContext);

	// grab state from ContactState.js
	const { contacts, filtered } = contactContext;

	// if there are no contacts
	if (contacts.length === 0) {
		return <h4>Please add a contact</h4>;
	}

	return (
		<Fragment>
			{/* add transition animation */}
			<TransitionGroup>
				{/* check if there's something in 'filtered' state */}
				{filtered !== null
					? // if there is
					  filtered
							// loop through contacts
							.map(contact => (
								// and display only contacts that matches our filter
								// wrap each Component in CSSTransition to add animation
								<CSSTransition key={contact.id} timeout={500} classNames='item'>
									<ContactItem contact={contact} />
								</CSSTransition>
							))
					: // else just display all contacts
					  contacts.map(contact => (
							<CSSTransition key={contact.id} timeout={500} classNames='item'>
								<ContactItem contact={contact} />
							</CSSTransition>
					  ))}
			</TransitionGroup>
		</Fragment>
	);
};

export default Contacts;
