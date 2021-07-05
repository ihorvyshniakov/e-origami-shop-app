import React from 'react';
import { useState } from 'react';
import {sortOptions, filterOptions} from '../Constants/constants';

import './Home.css';

import FilterSort from '../FilterSort/FilterSort';

let isShow = {
	filterSort: true,
}

const Home = () => {
	const [sortState, setSortState] = useState(sortOptions.highFirst);
	const [viewState, setViewState] = useState(filterOptions.little);

	const toggleSortType = () => {
		if (sortState === sortOptions.highFirst){
			setSortState(sortOptions.lowFirst)
		} else {
			setSortState(sortOptions.highFirst)
		}
	}

	const toggleViewType = () => {
		if (viewState === filterOptions.little){
			setViewState(filterOptions.many)
		} else {
			setViewState(filterOptions.little)
		}
	}

	let filterSortProps = {
		sortState,
		viewState,
		toggleSortType,
		toggleViewType,
	}

	return (
		<>
			{isShow.filterSort && <FilterSort {...filterSortProps} />}
		</>
	)
}

export default Home;