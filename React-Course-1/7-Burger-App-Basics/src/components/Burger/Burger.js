import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngriedent/BurgerIngriedent';

const burger = props => {
	// convert object ingredients from BurgerBuilder into an array
	// grab keys (salad, bacon, etc.)
	// console.log(props.ingredients);

	// const transformedIngredientss = Object.keys(props.ingredients);
	// console.log(transformedIngredientss);

	// this returns an array of ingredients
	let transformedIngredients = Object.keys(props.ingredients)
		// loop over ingredients
		.map(igKey => {
			// console.log(igKey);
			// construct an array
			// const arrayOfIngriedients = [...Array(props.ingredients)];
			// console.log(arrayOfIngriedients);
			return [...Array(props.ingredients[igKey])].map((_, i) => {
				// _ - empty value,
				// i - amount of ingredients
				// console.log(_, i);
				// console.log(igKey);
				return <BurgerIngredient key={igKey + i} type={igKey} />;
			});
		})
		// using reduce pull all arrays from transformedIngredients array and construct one single array
		// arr - previous value
		// el - current value
		.reduce(
			(arr, el) => {
				return arr.concat(el);
			},
			// initial value - empty array []
			[]
		);
	// console.log(transformedIngredients);

	// check if an array of ingredients is empty
	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>Please start adding ingredients.</p>;
	}
	return (
		// use burger ingredients component
		<div className={classes.Burger}>
			<BurgerIngredient type='bread-top' />
			{transformedIngredients}
			<BurgerIngredient type='bread-bottom' />
		</div>
	);
};

export default burger;
