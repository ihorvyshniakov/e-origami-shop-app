import React, {useState} from 'react';
import { sortOptions, viewOptions } from '../Constants/constants';

const sortViewStatus = {
	sort: sortOptions.lowFirst,
	view: viewOptions.many,
};

export const ViewContextProvider = ({children}) => {
	const [sort, setSort] = useState(sortViewStatus.sort);

	const contextSort = {sort, setSort};
	return (
		<ViewContext.Provider value={contextSort}>
			{children}
		</ViewContext.Provider>
	)
}

export const ViewContext = React.createContext();