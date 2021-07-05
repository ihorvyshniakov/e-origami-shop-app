import React from 'react';
import { useState } from 'react';
import {sortOptions, viewOptions} from '../Helpers/Constants/constants';

import './Home.css';

import FilterSort from '../FilterSort/FilterSort';
import ItemsList from '../ItemsList/ItemsList';

let isShow = {
	filterSort: true,
}

const Home = () => {
	const [sortState, setSortState] = useState(sortOptions.highFirst);
	const [viewState, setViewState] = useState(viewOptions.little);

	const toggleSortType = () => {
		if (sortState === sortOptions.highFirst){
			setSortState(sortOptions.lowFirst)
		} else {
			setSortState(sortOptions.highFirst)
		}
	}

	const toggleViewType = () => {
		if (viewState === viewOptions.little){
			setViewState(viewOptions.many)
		} else {
			setViewState(viewOptions.little)
		}
	}

	let filterSortProps = {
		sortState,
		viewState,
		toggleSortType,
		toggleViewType,
	}

	let postsArr = [];
	for(let i=0; i<10; i++){
		postsArr.push('')
	}

	return (
		<>
			{isShow.filterSort && <FilterSort {...filterSortProps} />}
			<ItemsList sortState={sortState} viewState={viewState}/>
		</>
	)
}

export default Home;