import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
	state = {
		posts: [],
		selectedPostId: null,
		error: false,
	};

	componentDidMount() {
		// set a get request
		// get(url that we want to send request to, configure request)
		axios
			.get('/posts')
			.then(response => {
				// we still fetch all posts, but store only 4 of them in an variable
				const posts = response.data.slice(0, 4);
				// loop over posts
				const updatedPosts = posts.map(post => {
					return {
						// get properties of each post (userId, id, title, body)
						...post,
						// and add new author property
						author: 'Roland',
					};
				});
				// we want to update state once we fetch some data from the server
				this.setState({
					// populate posts array with data we get from server
					posts: updatedPosts,
				});
				// console.log(response);
			})
			.catch(err => {
				// console.log(err);
				this.setState({ error: true });
			});
	}

	postSelectedHandler = id => {
		this.setState({ selectedPostId: id });
	};

	render() {
		let posts = <p style={{ textAlign: 'center' }}>Something went wrong.</p>;
		// if we don't have any errors
		if (!this.state.error) {
			// loop over posts
			posts = this.state.posts.map(post => {
				return (
					// populate Post component with post properties
					<Post
						key={post.id}
						title={post.title}
						author={post.author}
						// pass id as an argument to our method
						clicked={() => this.postSelectedHandler(post.id)}
					/>
				);
			});
		}

		return (
			<div>
				<section className='Posts'>{posts}</section>
				<section>
					<FullPost id={this.state.selectedPostId} />
				</section>
				<section>
					<NewPost />
				</section>
			</div>
		);
	}
}

export default Blog;
