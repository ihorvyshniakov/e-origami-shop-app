import React, {useState} from 'react';

import { sortOptions, viewOptions } from '../Constants/constants';

export const ViewContextProvider = ({children}) => {
	const [likedCounter, setLikedCounter] = useState(0);
	const [orderCounter, setOrderCounter] = useState(0);
	const [sortType, setSortType] = useState(sortOptions.lowFirst);
	const [viewType, viewSortType] = useState(viewOptions.many);
	
	const globalContext = {likedCounter, setLikedCounter, orderCounter, setOrderCounter, sortType, setSortType};
	return (
		<GlobalContext.Provider value={globalContext}>
			{children}
		</GlobalContext.Provider>
	)
}

export const GlobalContext = React.createContext();