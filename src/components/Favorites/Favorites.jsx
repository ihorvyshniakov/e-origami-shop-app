import React from 'react';
import {isShowOnPage} from '../Helpers/Constants/constants';

import FilterSort from '../FilterSort/FilterSort';
import ItemsList from '../ItemsList/ItemsList';

const Favorites = () => {
	return (
		<>
			{isShowOnPage.favorites.filterSort && <FilterSort/>}
			<ItemsList/>
		</>
	)
}

export default Favorites;