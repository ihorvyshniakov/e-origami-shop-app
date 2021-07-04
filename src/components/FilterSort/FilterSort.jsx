import React from 'react';
import { useState } from 'react';

import './FilterSort.css';

const FilterSort = () => {
	const [sortState, setSortState] = useState('high to low');
	const [viewState, setViewState] = useState('little');

	const toggleSortType = () => {
		if (sortState === 'high to low'){
			setSortState('low to high')
		} else {
			setSortState('high to low')
		}
	}

	const toggleViewType = () => {
		if (viewState === 'little'){
			setViewState('many')
		} else {
			setViewState('little')
		}
	}

	return (
		<div className="filterSort">
			<div className="sorting r5 hover" onClick={() => toggleSortType()} >
				<i className={`fa fa-sort-amount-${sortState === 'high to low' ? 'desc' : 'asc'}`} aria-hidden="true"></i>
			</div>
			<div className="view r5 hover" onClick={() => toggleViewType()}>
				<i className={`fa ${viewState === 'little' ? 'fa-pause' : 'fa-th'}`} aria-hidden="true"></i>
			</div>
		</div>
	)
}

export default FilterSort;