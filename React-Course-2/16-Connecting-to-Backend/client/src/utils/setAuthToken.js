// check if token is passed in, if it is then set it to a global/defaults header, else delete it
import axios from 'axios';

const setAuthToken = token => {
	if (token) {
		axios.defaults.headers.common['x-auth-token'] = token;
	} else {
		delete axios.defaults.headers.common['x-auth-token'];
	}
};

export default setAuthToken;
