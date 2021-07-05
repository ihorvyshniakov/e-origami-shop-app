import React from 'react';
import {sortOptions, filterOptions} from '../Constants/constants';

import './FilterSort.css';

const FilterSort = ({sortState, viewState, toggleSortType, toggleViewType}) => {

	return (
		<div className="filterSort">
			<div className="sorting r5 hover" onClick={toggleSortType} >
				<i className={`fa fa-sort-amount-${sortState === sortOptions.highFirst ? 'desc' : 'asc'}`} aria-hidden="true"></i>
			</div>
			<div className="view r5 hover" onClick={toggleViewType}>
				<i className={`fa ${viewState === filterOptions.little ? 'fa-pause' : 'fa-th'}`} aria-hidden="true"></i>
			</div>
		</div>
	)
}

export default FilterSort;