import {
	PRIMARY_PASSENGER,
	ADD_PASSENGER,
	DELETE_PASSENGER,
} from '../actions/actionTypes';
const initialState = {
	primaryPassenger: {
		name: '',
		weight: 0,
		email: '',
	},
	passengers: [],
}
const profileReducer = (state = initialState, action) => {
	switch (action.type){
		case PRIMARY_PASSENGER:
			return {
				...state,
				primaryPassenger: {
					name: action.payload.name,
					weight: action.payload.weight,
					email: action.payload.email
				}
			};
			break;
		case ADD_PASSENGER:
			return {
				...state,
				passengers: [...state.passengers, action.payload]
			};
			break;
		case DELETE_PASSENGER:
			return {
				...state,
				passengers: [...state.passengers.filter(passenger => {
					return passenger !== action.payload
				})]
			};
			break;
		default:
			return state;
			break;
	}
};
export default profileReducer;