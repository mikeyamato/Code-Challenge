import {
	ADD_LOCATION,
	ADD_TEMP_LOCATION,
} from './actionTypes';

export const addLocation = location => {
	return {
		type: ADD_LOCATION,
		payload: location
	};
};

export const locationNotBookmarked = temporaryLocation => {
	return {
		type: ADD_TEMP_LOCATION,
		payload: temporaryLocation
	}
}