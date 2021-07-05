import React, { useContext } from 'react';
import {sortOptions, filterOptions} from '../Helpers/Constants/constants';
import { ViewContext } from '../Helpers/Context/Context';

import './FilterSort.css';

const FilterSort = ({sortState, viewState, toggleSortType, toggleViewType}) => {
	const view = useContext(ViewContext);

	console.log(view.sort)
	return (
		<div className="filterSort">
			<div className="sorting r5 hover" onClick={toggleSortType} >
				<i className={`fa fa-sort-amount-${view.sort === sortOptions.highFirst ? 'desc' : 'asc'}`} aria-hidden="true"></i>
			</div>
			<div className="view r5 hover" onClick={toggleViewType}>
				<i className={`fa ${viewState === filterOptions.little ? 'fa-pause' : 'fa-th'}`} aria-hidden="true"></i>
			</div>
		</div>
	)
}

export default FilterSort;