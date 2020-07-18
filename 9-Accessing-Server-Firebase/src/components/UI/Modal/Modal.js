import React, { Component } from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
	// control updating of the summary
	shouldComponentUpdate(nextProps, nextState) {
		return (
			nextProps.show !== this.props.show ||
			// update if we get a new children, in our case we want to update a modal if spinner will be displayed in it
			nextProps.children !== this.props.children
		);
	}

	componentDidUpdate() {
		// console.log('[Modal] DidUpdate');
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
