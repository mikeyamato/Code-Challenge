import {
	ADD_LOCATION
} from './actionTypes';

export const addLocation = location => {
	return {
		type: ADD_LOCATION,
		payload: location
	};
};
