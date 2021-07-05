import React from 'react';
import { sortOptions, filterOptions } from '../Constants/constants';

const sortViewStatus = {
	sort: sortOptions.lowFirst,
	view: filterOptions.many
};

export const ViewContext = React.createContext(sortViewStatus);