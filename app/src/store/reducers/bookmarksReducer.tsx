import {
	ADD_LOCATION,
	ADD_TEMP_LOCATION
} from '../actions/actionTypes';

const initialState = {
	bookmarksExists: false,
	bookmarkedLocations: [],
	selectedLocationNotBookmarked: null,
}

const bookmarksReducer = (state = initialState, action) => {
	switch (action.type){
		case ADD_LOCATION:
			return {
				...state,
				bookmarksExists: true,
				bookmarkedLocations: [...state.bookmarkedLocations, action.payload],
			};
			break;
		case ADD_TEMP_LOCATION:
			return {
				...state,
				selectedLocationNotBookmarked: action.payload,
			};
			break;
		default:
			return state;
			break;
	}
};
export default bookmarksReducer;