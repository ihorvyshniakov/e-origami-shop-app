import React from 'react';
import { useState } from 'react';
import {sortOptions, viewOptions, isShowOnPage} from '../Helpers/Constants/constants';

import FilterSort from '../FilterSort/FilterSort';
import ItemsList from '../ItemsList/ItemsList';

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
			{isShowOnPage.home.filterSort && <FilterSort {...filterSortProps} />}
			<ItemsList/>
		</>
	)
}

export default Home;