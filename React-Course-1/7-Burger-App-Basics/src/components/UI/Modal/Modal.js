import React, { Component } from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
	// control updating of the summary
	shouldComponentUpdate(nextProps, nextState) {
		// make sure that this only updates if show={this.props.show} changes
		// if show is not equal to previous state
		// if (nextProps.show !== this.props.show) {
		// 	return true;
		// }

		// shorter way of writing it
		return nextProps.show !== this.props.show;
	}

	componentDidUpdate() {
		console.log('[Modal] DidUpdate');
	}

	render() {
		return (
			<Aux>
				<Backdrop show={this.props.show} clicked={this.props.modalClosed} />
				<div
					className={classes.Modal}
					style={{
						transform: this.props.show
							? // if purchasing is true show modal
							  'translateY(0)'
							: // else hide it
							  'translateY(-100vh)',
						opacity: this.props.show ? '1' : '0',
					}}
				>
					{this.props.children}
				</div>
			</Aux>
		);
	}
}

export default Modal;
