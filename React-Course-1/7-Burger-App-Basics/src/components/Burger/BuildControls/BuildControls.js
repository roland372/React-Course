import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' },
];

const buildControls = props => (
	<div className={classes.BuildControls}>
		{/* loop over controls array and render control for each ingredient*/}

		<p>
			{/* toFixed will round it to 2 decimal places */}
			<strong>Current Price: {props.price.toFixed(2)} </strong>
		</p>

		{controls.map(ctrl => (
			<BuildControl
				key={ctrl.label}
				label={ctrl.label}
				// we're expecting to get type as an argument from BurgerBuilder.js thats why we're passing it as an argument here
				added={() => props.ingredientAdded(ctrl.type)}
				removed={() => props.ingredientRemoved(ctrl.type)}
				// access disabled based on type
				disabled={props.disabled[ctrl.type]}
			/>
		))}
		<button
			className={classes.OrderButton}
			// disable button if burger is not purchasable, has less than 1 ingredients
			disabled={!props.purchasable}
			onClick={props.ordered}
		>
			ORDER NOW
		</button>
	</div>
);

export default buildControls;
