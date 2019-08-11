import React, { Component } from 'react';
import { 
	View, 
	Text, 
	Image,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import { 
	withNavigation,
	// https://dev.to/andreasbergqvist/react-navigation-with-typescript-29ka
	NavigationInjectedProps
} from 'react-navigation';

import { Images, Fonts } from '../../../../themes';
import { IWeatherDetailsProps } from '../../../../types/bookmark';

const styles = StyleSheet.create<IWeatherDetailsProps>({
	container: {
		flex: .18,
		width: '100%',
	},
	sunBkgd: {
		flex: 1,
	},
	copyPlusButtonContainer: {
		position: 'absolute',
		alignSelf: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '86%',
		bottom: '20%',
		// borderWidth: 1,
		// borderColor: Colors.facebook,
	},
	copyContainer: {
		justifyContent: 'space-around',
	},
	buttonContainer: {
	},
	salutationCopy: {
		fontSize: Fonts.normalizedSize.h1, 
		fontFamily: Fonts.family.sfPro, 
		fontWeight: Fonts.weight.light,
		color: '#0A0A0A',
		letterSpacing: 0.3,
		// borderWidth: 1,
		// borderColor: Colors.facebook,
	},
	forecastCopy: {
		fontSize: Fonts.normalizedSize.xsmall, 
		fontFamily: Fonts.family.sfPro, 
		fontWeight: Fonts.weight.medium,
		color: '#383838',
		letterSpacing: 0.15,
		// borderWidth: 1,
		// borderColor: Colors.facebook,
	},
})

class WeatherDetails extends Component<NavigationInjectedProps> {

	_toSearchScreen = () => {
		this.props.navigation.navigate('SearchScreen')
	}

	render() {
		return (
			<View style={styles.container}  >
				<Image style={styles.sunBkgd} source={Images.bkmkGoodMorningBkgd} />
				<View style={styles.copyPlusButtonContainer}>
					<View style={styles.copyContainer}>
						<Text style={styles.salutationCopy}>
							Good morning
						</Text>
						<Text style={styles.forecastCopy}>
							Today is 72° and Sunny
						</Text>
					</View>
					<TouchableOpacity onPress={this._toSearchScreen}>
						<Image style={styles.buttonContainer} source={Images.bkmkBlueButton}/>
					</TouchableOpacity>	
				</View>
			</View>
		)
	}
}

export default withNavigation(WeatherDetails);