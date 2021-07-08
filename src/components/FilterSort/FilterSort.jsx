import React, { useContext } from 'react';
import {sortOptions, viewOptions} from '../Helpers/Constants/constants';
import { ViewContext } from '../Helpers/Context/Context';

import './FilterSort.css';

const FilterSort = ({sortState, viewState, toggleSortType, toggleViewType}) => {
	const contextSort = useContext(ViewContext);

	return (
		<div className="filterSort">
			<div className="sorting r5 hover" onClick="() => contextSort.setSort({})" >
				<i className={`fa fa-sort-amount-${sortState === sortOptions.highFirst ? 'desc' : 'asc'}`} aria-hidden="true"></i>
			</div>
			<div className="view r5 hover" onClick={toggleViewType}>
				<i className={`fa ${viewState === viewOptions.little ? 'fa-pause' : 'fa-th'}`} aria-hidden="true"></i>
			</div>
		</div>
	)
}

export default FilterSort;