import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
	state = {
		loadedPost: null,
	};

	// make http request to one single post
	componentDidUpdate() {
		// we only want to send a request when selectedPostId is not null
		if (this.props.id) {
			// make sure that we only send a http request and update the state if we're actually loading a new post, because we don't want to send a constant stream of requests

			// if we already have loaded post we don't want to load this post again when we click on it, we can check it by comparing the id's
			if (
				!this.state.loadedPost ||
				(this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
			) {
				axios.get('/posts/' + this.props.id).then(response => {
					// console.log(response);
					// set loaded post to state
					this.setState({ loadedPost: response.data });
				});
			}
		}
	}

	deletePostHandler = () => {
		// send delete request to a server
		// delete also takes an url, and we need to target a specific post with it
		axios
			.delete('/posts/' + this.props.id)
			.then(response => {
				console.log(response);
			})
			.catch(err => {
				console.log(err);
			});
	};

	render() {
		let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;

		// if selectedPostId is not null
		if (this.props.id) {
			post = <p style={{ textAlign: 'center' }}>Loading...</p>;
		}

		// check if state loadedPost has been set
		if (this.state.loadedPost) {
			// display full post after we click on it
			post = (
				<div className='FullPost'>
					<h1>{this.state.loadedPost.title}</h1>
					<p>{this.state.loadedPost.body}</p>
					<div className='Edit'>
						<button onClick={this.deletePostHandler} className='Delete'>
							Delete
						</button>
					</div>
				</div>
			);
		}
		return post;
	}
}

export default FullPost;
