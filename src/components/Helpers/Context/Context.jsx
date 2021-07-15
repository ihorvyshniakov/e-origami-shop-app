import React, {useState} from 'react';

import { sortOptions, viewOptions } from '../Constants/constants';

export const ViewContextProvider = ({children}) => {
	const [orderCounter, setOrderCounter] = useState(0);
	const [sortType, setSortType] = useState(sortOptions.lowFirst);
	const [viewType, setViewType] = useState(viewOptions.little);
	const [likedList, setLikedList] = useState([]);
	
	const globalContext = {
		orderCounter, 
		setOrderCounter, 
		sortType, 
		setSortType, 
		viewType, 
		setViewType,
		likedList, 
		setLikedList,
	};
	return (
		<GlobalContext.Provider value={globalContext}>
			{children}
		</GlobalContext.Provider>
	)
}

export const GlobalContext = React.createContext();