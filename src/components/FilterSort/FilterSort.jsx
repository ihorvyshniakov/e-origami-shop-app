import React, { useContext } from 'react';
import {sortOptions, viewOptions} from '../Helpers/Constants/constants';
import { GlobalContext } from '../Helpers/Context/Context';

import './FilterSort.css';

const FilterSort = () => {
	const globalContext = useContext(GlobalContext);

	const changeSortTypeHandler = () => {
		if(globalContext.sortType == sortOptions.lowFirst){
			globalContext.setSortType(sortOptions.highFirst)
		} else {
			globalContext.setSortType(sortOptions.lowFirst)
		}
	}

	return (
		<div className="filterSort">
			<div className="sorting r5 hover" onClick={changeSortTypeHandler}>
				<i className={`fa fa-sort-amount-${globalContext.sortType === sortOptions.highFirst ? 'desc' : 'asc'}`} aria-hidden="true"></i>
			</div>
			<div className="view r5 hover">
				{/* <i className={`fa ${viewState === viewOptions.little ? 'fa-pause' : 'fa-th'}`} aria-hidden="true"></i> */}
				<i className={`fa fa-th`} aria-hidden="true"></i>
			</div>
		</div>
	)
}

export default FilterSort;