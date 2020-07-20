import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

// pull repos from props
const Repos = ({ repos }) => {
	// console.log(repos);

	// loop through all repos
	return repos.map(repo => (
		// wrap each repo in Component and pass props
		<RepoItem repo={repo} key={repo.id} />
	));
};

Repos.propTypes = {
	repos: PropTypes.array.isRequired,
};

export default Repos;
