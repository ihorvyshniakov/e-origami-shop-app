import React from 'react';

import './Home.css';

import FilterSort from '../FilterSort/FilterSort';

let isShow = {
	filterSort: true,
}

const Home = () => {
	return (
		<>
			{isShow.filterSort && <FilterSort />}
		</>
	)
}

export default Home;