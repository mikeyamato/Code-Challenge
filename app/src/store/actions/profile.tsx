/**
|--------------------------------------------------
| this is temporary
| https://redux.js.org/recipes/usage-with-typescript
|--------------------------------------------------
*/


import {
	PRIMARY_PASSENGER,
	ADD_PASSENGER,
	DELETE_PASSENGER,
	} from './actionTypes';

export const primaryPassenger = passenger => {
	return {
		type: PRIMARY_PASSENGER,
		payload: passenger
	};
};
export const passengers = passengerCopy => {
	return {
		type: ADD_PASSENGER,
		payload: passengerCopy
	};
};
export const deletePassenger = passengerRemove => {
	return {
		type: DELETE_PASSENGER,
		payload: passengerRemove
	};
};