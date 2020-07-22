import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
	// initialize context
	const contactContext = useContext(ContactContext);

	// initialize ref value
	const text = useRef('');

	// destructure context
	const { filterContacts, clearFilter, filtered } = contactContext;

	useEffect(() => {
		// if 'filtered' state is empty
		if (filtered === null) {
			// set current text to nothing
			text.current.value = '';
		}
	});

	const onChange = e => {
		// get value of the input
		// if input value is not empty
		if (text.current.value !== '') {
			// run filter method from context
			// pass e.target.value as a text
			filterContacts(e.target.value);
		}
		// if input is empty then clear filter
		else {
			clearFilter();
		}
	};

	return (
		<form>
			<input
				ref={text}
				type='text'
				placeholder='Filter Contacts'
				onChange={onChange}
			/>
		</form>
	);
};

export default ContactFilter;
