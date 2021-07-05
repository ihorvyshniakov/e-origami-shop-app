import React from 'react';
import { sortOptions, viewOptions } from '../Constants/constants';

const sortViewStatus = {
	sort: sortOptions.lowFirst,
	view: viewOptions.many
};

export const ViewContext = React.createContext(sortViewStatus);