import { createStackNavigator } from 'react-navigation';

import { Bookmark } from './src/components/views/Bookmarks';
import { Search } from './src/components/views/Searches';
import { Place } from './src/components/views/Places';

const AppNavigator = createStackNavigator(
	{
		BookmarkScreen: {
			screen: Bookmark,
			navigationOptions: () => ({
				// hides header
				header: null,
				// prevent swipe back
				gesturesEnabled: false,  
			})
		},
		SearchScreen: {
			screen: Search,
			navigationOptions: () => ({
				// hides header
				header: null,
				// prevent swipe back
				gesturesEnabled: false,  
			})
		},
		PlaceScreen: {
			screen: Place,
			navigationOptions: () => ({
				// hides header
				header: null,
				// prevent swipe back
				gesturesEnabled: false,  
			})
		},
	},
	// as the name suggests, first screen when starting app
	{
		initialRouteName: 'SearchScreen',
	}
)

export default AppNavigator;