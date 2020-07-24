import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';
import { useContext, useEffect } from 'react';

const Home = () => {
	const authContext = useContext(AuthContext);

	// run as soon as component loads
	useEffect(() => {
		// this will look at the token, validate it at backend, and put the user into the state
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);

	return (
		<div className='grid-2'>
			<div>
				<ContactForm />
			</div>
			<div>
				<ContactFilter />
				<Contacts />
			</div>
		</div>
	);
};

export default Home;
