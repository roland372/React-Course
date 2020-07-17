import axios from 'axios';

// set axios instance to overwrite some settings when we send a response/request to specific url
const instance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
});

// overwrite all headers that are sent from this instance, from this baseURL that we set
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...

export default instance;
