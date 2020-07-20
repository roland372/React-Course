import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
// import { Route, Link } from 'react-router-dom';
import { Route, NavLink } from 'react-router-dom';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
	render() {
		return (
			<div className='Blog'>
				<header>
					<nav>
						<ul>
							<li>
								{/* <a href='/'>Home</a> */}
								{/* <a href='/new-post'>New Post</a> */}
								{/* we use Link instead of standard a tag to navigate to different page without having to render whole page just part the of it */}

								{/* <Link to='/'>Home</Link>
								<Link to='/new-post'>New Post</Link> */}

								{/* NavLink allows us to add some style into it depending on which link we are it will add active class into it, which we can style in css */}
								{/* <NavLink 
								to='/' 
								exact 
								// you can add activeClassName to set up your own class, default is 'active'
								activeClassName='my-active'>
									Home
								</NavLink> */}
								<NavLink
									to='/'
									exact
									activeClassName='my-active'
									activeStyle={{ color: 'green', textDecoration: 'underline' }}
								>
									Home
								</NavLink>
								<NavLink to='/new-post'>New Post</NavLink>

								{/* some configuration settings that we can add to Link component */}
								{/* <Link
									to={{
										// build relative path
										pathname: this.props.match.url + '/new-post',
										
										// absolute path
										pathname: '/new-post',
										hash: '#submit',
										search: '?quick-submit=true',
									}}
								>
									New Post
								</Link> */}
							</li>
						</ul>
					</nav>
				</header>
				{/* configure Route */}
				{/* path - for what path this route should become active
				 */}
				{/* exact will point exactly to / , not path that starts with /, like /new-posts */}
				{/* render- what should happen when we reach this route */}
				{/* component - pass a component to render */}
				{/* <Route path='/' exact render={() => <h1>Home</h1>} />
				<Route path='/' exact render={() => <h1>Home 2</h1>} /> */}
				<Route path='/' exact component={Posts} />
				<Route path='/new-post' component={NewPost} />
				<Route path='/:id' exact component={FullPost} />
			</div>
		);
	}
}

export default Blog;
