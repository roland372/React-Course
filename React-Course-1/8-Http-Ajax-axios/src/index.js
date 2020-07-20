import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// set up default request
// other request will be appended to this url, like /posts
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

// set up default headers that will be set for all requests
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

// set headers to specific request
axios.defaults.headers.post['Content-Type'] = 'application/json';

// intercept requests
axios.interceptors.request.use(
	request => {
		console.log(request);
		// we always have to return request otherwise we will block all other requests
		return request;
	},
	error => {
		console.log(error);
		// always reject error, to forward the request to our component, so that we can handle it
		return Promise.reject(error);
	}
);

// intercept responses
axios.interceptors.response.use(
	response => {
		console.log(response);
		return response;
	},
	error => {
		console.log(error);
		return Promise.reject(error);
	}
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
