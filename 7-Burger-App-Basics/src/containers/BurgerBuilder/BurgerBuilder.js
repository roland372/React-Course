import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

// we usually name global variables in capital characters
// set price of each ingredient
const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7,
};

class BurgerBuilder extends Component {
	// constructor(props){
	// 	super(props);
	// 	this.state = {...}
	// }

	state = {
		ingredients: {
			// name of ingredient: amount
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		// base burger price, no matter the ingredients
		totalPrice: 4,
		// if it's false we can't order, button will be disabled, we don't want to allow to make an order if no ingredients were added
		purchasable: false,
		// check if order button was clicked
		purchasing: false,
	};

	// ingredients - check current state of ingredients
	updatePurchaseState(ingredients) {
		// sum all ingredients values
		// create an array of (salad, bacon, cheese, meat)
		const sum = Object.keys(ingredients)
			.map(igKey => {
				// return values for each key (0,0,0,0) are initial
				return ingredients[igKey];
			})
			// call reduce to sum all ingredients
			.reduce((sum, el) => {
				return sum + el;
			}, 0);
		// set purchasable to true only if we have at least one ingredient
		this.setState({ purchasable: sum > 0 });
	}

	addIngredientHandler = type => {
		// find out old ingredient count
		const oldCount = this.state.ingredients[type];

		// calculate updated  count
		const updatedCount = oldCount + 1;

		const updatedIngredients = {
			// grab all properties of ingredinets and copy them to updatedIngredients
			...this.state.ingredients,
		};

		// set updated count
		updatedIngredients[type] = updatedCount;

		// update price
		const priceAddition = INGREDIENT_PRICES[type];
		// get old total price
		const oldPrice = this.state.totalPrice;
		// set new price
		const newPrice = oldPrice + priceAddition;

		// update ingredients and price in state
		this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });

		// check if burger is purchasable
		this.updatePurchaseState(updatedIngredients);
	};

	removeIngredientHandler = type => {
		const oldCount = this.state.ingredients[type];

		// make sure that oldCount of ingredients is not less or equal than zero, we don't want to have negative amount of ingredients
		if (oldCount <= 0) {
			// if it's <= simply return so nothing happens if we try to remove an ingredient that we don't have
			return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = {
			...this.state.ingredients,
		};
		updatedIngredients[type] = updatedCount;

		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;

		this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });

		// check if burger is purchasable
		this.updatePurchaseState(updatedIngredients);
	};

	// method will be triggered whenever we click order now button
	purchaseHandler = () => {
		this.setState({ purchasing: true });
	};

	// hide modal/calcel purchase
	purchaseCancelHandler = () => {
		this.setState({ purchasing: false });
	};

	purchaseContinueHandler = () => {
		alert('You continue');
	};

	render() {
		// disable button if we have no ingredients to remove
		const disabledInfo = {
			// grab properties of ingredients (cheese, bacon, etc.)
			...this.state.ingredients,
		};
		console.log(disabledInfo);

		// value of each key in the beginning is 0
		for (let key in disabledInfo) {
			// disabledInfo[key] <= 0 will return true or false
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		// {salad: true, meat: false, ...}
		return (
			<Aux>
				{/* only if purchasing is true, modal should be visible */}
				<Modal
					show={this.state.purchasing}
					modalClosed={this.purchaseCancelHandler}
				>
					<OrderSummary
						ingredients={this.state.ingredients}
						purchaseCancelled={this.purchaseCancelHandler}
						purchaseContinued={this.purchaseContinueHandler}
						price={this.state.totalPrice}
					/>
				</Modal>
				{/* pass ingredients to Burger.js */}
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					disabled={disabledInfo}
					purchasable={this.state.purchasable}
					ordered={this.purchaseHandler}
					price={this.state.totalPrice}
				/>
			</Aux>
		);
	}
}

export default BurgerBuilder;
