import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngriedent.module.css';

class BurgerIngredient extends Component {
	render() {
		// initially we won't render anything in case something invalid is passed in
		let ingredient = null;

		// analyze type of our ingredient
		switch (this.props.type) {
			case 'bread-bottom':
				// display div with specific css class depending on ingredient type
				ingredient = <div className={classes.BreadBottom}></div>;
				break;
			case 'bread-top':
				ingredient = (
					<div className={classes.BreadTop}>
						<div className={classes.Seeds1}></div>
						<div className={classes.Seeds2}></div>
					</div>
				);
				break;
			case 'meat':
				ingredient = <div className={classes.Meat}></div>;
				break;
			case 'cheese':
				ingredient = <div className={classes.Cheese}></div>;
				break;
			case 'bacon':
				ingredient = <div className={classes.Bacon}></div>;
				break;
			case 'salad':
				ingredient = <div className={classes.Salad}></div>;
				break;
			// default ingredient in case no ingredients are passed
			default:
				ingredient = null;
		}
		return ingredient;
	}
}

// add prop type validation
BurgerIngredient.propTypes = {
	type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
