import React from 'react';
// import { withRouter } from 'react-router-dom';

import './Post.css';

// const post = props => {
// 	console.log(props);
// 	return (
// 		<article className='Post' onClick={props.clicked}>
// 			<h1>{props.title}</h1>
// 			<div className='Info'>
// 				<div className='Author'>{props.author}</div>
// 			</div>
// 		</article>
// 	);
// };

const post = props => (
	<article className='Post' onClick={props.clicked}>
		<h1>{props.title}</h1>
		<div className='Info'>
			<div className='Author'>{props.author}</div>
		</div>
	</article>
);

// withRouter we can pass all props from one Component to another
// export default withRouter(post);
export default post;
