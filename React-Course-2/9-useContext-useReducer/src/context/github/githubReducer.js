import {
	SEARCH_USERS,
	SET_LOADING,
	CLEAR_USERS,
	GET_USER,
	GET_REPOS,
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case SEARCH_USERS:
			return {
				...state,
				// payload contains all users data
				users: action.payload,
				// set loading to false after we make a request
				loading: false,
			};
		case GET_USER:
			return {
				...state,
				user: action.payload,
				loading: false,
			};
		case CLEAR_USERS:
			return {
				...state,
				// set users to an empty array
				users: [],
				loading: false,
			};
		case GET_REPOS:
			return {
				...state,
				repos: action.payload,
				loading: false,
			};
		case SET_LOADING:
			return {
				// return whatever already is in a state
				// ... will copy what is in current state
				...state,
				loading: true,
			};
		default:
			return state;
	}
};
