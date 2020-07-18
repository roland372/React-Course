import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';

// display error component inside a modal
const withErrorHandler = (WrappedComponent, axios) => {
	return class extends Component {
		state = {
			error: null,
		};

		componentDidMount() {
			// handle errors

			// when we set a request we want to clear any errors
			this.reqInterceptor = axios.interceptors.request.use(req => {
				this.setState({ error: null });
				return req;
			});
			// use(function to use, handle error)
			this.resInterceptor = axios.interceptors.response.use(
				res => res,
				error => {
					console.log(error);
					// show error from firebase
					this.setState({ error: error });
				}
			);
		}

		// when we no longer need to handle errors
		componentWillUnmount() {
			// console.log(
			// 	'Will Unmount',
			// 	this,
			// 	this.reqInterceptor,
			// 	this.resInterceptor
			// );
			// remove interceptors to prevent memory leaks
			axios.interceptors.request.eject(this.reqInterceptor);
			axios.interceptors.response.eject(this.resInterceptor);
		}

		errorConfirmedHandler = () => {
			this.setState({ error: null });
		};

		render() {
			return (
				<Aux>
					{/* only show error in modal if this.state.error is not null, is not empty */}
					<Modal
						show={this.state.error}
						// clear errors when we close modal
						modalClosed={this.errorConfirmedHandler}
						// only output error if error state is not null
					>
						{this.state.error ? this.state.error.message : null}
					</Modal>
					<WrappedComponent {...this.props} />
				</Aux>
			);
		}
	};
};

export default withErrorHandler;
