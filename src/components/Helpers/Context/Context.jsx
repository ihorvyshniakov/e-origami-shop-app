import React, {useState} from 'react';
import { sortOptions, viewOptions } from '../Constants/constants';

const sortViewStatus = {
	sort: sortOptions.lowFirst,
	view: viewOptions.many,
};

export const ViewContextProvider = ({children}) => {
	const [value, setValue] = useState(sortViewStatus);

	const contextValue = {value, setValue};
	return (
		<ViewContext.Provider value={contextValue}>
			{children}
		</ViewContext.Provider>
	)
}

export const ViewContext = React.createContext();