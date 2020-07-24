import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_ERRORS,
} from '../types';

const AuthState = props => {
	const initialState = {
		// we'll be storing token in local storage
		token: localStorage.getItem('token'),
		// if we're logged in or not
		isAuthenticated: null,
		loading: true,
		// what user we're dealing with
		user: null,
		// if we have any errors, we can put them here
		error: null,
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	// Load User - check which user is logged in
	const loadUser = async () => {
		// set token to global/defaults header if it exists in local storage
		if (localStorage.token) {
			setAuthToken(localStorage.token);
		}

		try {
			// this will check this route and see if you're a valid user
			const res = await axios.get('/api/auth');

			dispatch({ type: USER_LOADED, payload: res.data });
		} catch (err) {
			dispatch({ type: AUTH_ERROR });
		}
	};

	// Register User
	const register = async formData => {
		const config = {
			// set headers
			headers: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.post('/api/users', formData, config);
			// dispatch to reducer
			dispatch({
				type: REGISTER_SUCCESS,
				// response is going to be token
				payload: res.data,
			});

			// this should get user from backend
			loadUser();
		} catch (err) {
			dispatch({
				type: REGISTER_FAIL,
				payload: err.response.data.msg,
			});
		}
	};

	// Login User
	const login = async formData => {
		const config = {
			// set headers
			headers: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.post('/api/auth', formData, config);
			// dispatch to reducer
			dispatch({
				type: LOGIN_SUCCESS,
				// response is going to be token
				payload: res.data,
			});

			// this should get user from backend
			loadUser();
		} catch (err) {
			dispatch({
				type: LOGIN_FAIL,
				payload: err.response.data.msg,
			});
		}
	};
	// Logout
	const logout = () => dispatch({ type: LOGOUT });

	// Clear Errors
	const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

	return (
		<AuthContext.Provider
			// pass anything that we want to be able to access from other components like state or methods
			value={{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				user: state.user,
				error: state.error,
				register,
				loadUser,
				login,
				logout,
				clearErrors,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
