import {
	ADD_LOCATION,
	ADD_TEMP_LOCATION
} from '../actions/actionTypes';

const initialState = {
	bookmarksExists: false,
	selectedLocationNotBookmarked: {
		address: "3614 W Magnolia Blvd, Burbank, CA 91505, USA",
		name:"Porto's Bakery and Cafe",
		rating:4.699999809265137,
		addressComponents: [
			{name:"3614",shortName:"3614"},
			{name:"West Magnolia Boulevard",shortName:"W Magnolia Blvd"},
			{name:"Magnolia Park",shortName:"Magnolia Park"},
			{name:"Burbank",shortName:"Burbank"},
			{name:"Los Angeles County",shortName:"Los Angeles County"},
			{name:"California",shortName:"CA"},
			{name:"United States",shortName:"US"},
			{name:"91505",shortName:"91505"},
		],
		types: ["bakery","cafe","store","restaurant","food","point_of_interest","establishment"]
	},
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