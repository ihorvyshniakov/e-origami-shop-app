import React from 'react';
import {isShowOnPage} from '../Helpers/Constants/constants';

import './Order.css';

import FilterSort from '../FilterSort/FilterSort';
import ItemsList from '../ItemsList/ItemsList';

const Order = () => {
	return (
		<>
			{isShowOnPage.order.filterSort && <FilterSort/>}
			<ItemsList isShowForOrder={true}/>
			<div className="total r5">
				<pre className="text">Total: <span className="value">420</span>$</pre>
			</div>
		</>
	)
}

export default Order;