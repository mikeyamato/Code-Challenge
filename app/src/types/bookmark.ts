import { 
	// how did they know to use these? https://dev.to/andreasbergqvist/react-navigation-with-typescript-29ka
	NavigationParams,
  NavigationScreenProp,
	NavigationState,
} from 'react-navigation';

import { 
	TextStyle,
	ViewStyle,
	ImageStyle
} from 'react-native';


// export interface INavigationProps {
// 	navigation: NavigationScreenProp<NavigationState, NavigationParams>;
// }

// type Style = {
// 	container: ViewStyle;
// 	title: TextStyle;
// };

export interface IWeatherDetailsProps {
	container: ViewStyle;
	sunBkgd: ViewStyle;
	title: TextStyle;
	copyPlusButtonContainer: ViewStyle;
	copyContainer: ViewStyle;
	buttonContainer: ViewStyle;
	salutationCopy: TextStyle;
	forecastCopy: TextStyle;
}

export interface IBookmarkNotPresentProps {
	container: ViewStyle;
	topCopy: TextStyle;
	bottomCopy: TextStyle;
}

export interface IExploringCityProps {
	buildingImgContainer: ViewStyle;
	buildingBkgd: ViewStyle;
	topBuildingGradient: ViewStyle;
	bottomBuildingGradient: ViewStyle;
	copyContainer: ViewStyle;
	topCopy: TextStyle;
	bottomCopy: TextStyle;
}