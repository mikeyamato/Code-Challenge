import {
	ADD_LOCATION,
} from '../actions/actionTypes';
const initialState = {
	bookmarksExists: false,
}
const bookmarksReducer = (state = initialState, action) => {
	switch (action.type){
		case ADD_LOCATION:
			return {
				...state,
				bookmarksExists: true,
				bookmarks: [action.payload],
			};
			break;
		default:
			return state;
			break;
	}
};
export default bookmarksReducer;