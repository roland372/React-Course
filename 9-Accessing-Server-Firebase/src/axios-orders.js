import axios from 'axios';

const instance = axios.create({
	// send requests to this url to store data in this database
	baseURL: 'https://react-my-burger-a3f2a.firebaseio.com/',
});

export default instance;
