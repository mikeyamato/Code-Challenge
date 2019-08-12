import React, { Component } from 'react';
import { 
	View, 
	Text, 
	Image,
	StyleSheet,
	TouchableOpacity,
	SafeAreaView,
} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { 
	withNavigation,
	// https://dev.to/andreasbergqvist/react-navigation-with-typescript-29ka
	NavigationInjectedProps
} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

import { Images, Fonts } from '../../../../themes';

const styles = StyleSheet.create({
	container: {
		flex: 0.62,
		position: 'relative',
		alignItems: 'center',
		width: '100%',
		zIndex: -1,
	},
	heroImage: {
		width: '100%',
	},
	topGradient: {
		height: '20%',
		position: 'absolute',
		top: 0,
		paddingHorizontal: '100%',
	},
	bottomGradient: {
		height: '52%',
		position: 'absolute',
		bottom: -10,
		paddingHorizontal: '100%',
	},
	goBackButtonContainer: {
		position: 'absolute',
		left: '5.3%',
		top: '8.9%',
	},
	goBackIcon: {
		position: 'absolute',
		transform: [{ rotate: '180deg' }],
	},
	copyPlusRatingContainer: {
		position: 'absolute',
		bottom: '6.2%',
		width: '86%',
	}, 
	cityPlusState: {
		position: 'relative',
		fontSize: Fonts.normalizedSize.xsmall, 
		fontFamily: Fonts.family.sfPro, 
		fontWeight: Fonts.weight.bold,
		color: '#FFFFFF',
		letterSpacing: 0.4,
	}, 
	businessNamePlusRating: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	businessName: {
		flex: .85,
		fontSize: Fonts.normalizedSize.h2, 
		fontFamily: Fonts.family.sfPro, 
		fontWeight: Fonts.weight.regular,
		color: '#FFFFFF',
		letterSpacing: 0.33,
	}, 
	ratingContainer: {
		flex: 0.15,
		flexDirection: 'row',
		position: 'absolute',
		right: 0,
		bottom: 0,
		width: '15%',
		height: '80%',
		backgroundColor: '#FFFFFF',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		borderRadius: 11.25,
	},
	ratingsHeart: {

	}, 
	ratingsNumber: {
		fontSize: Fonts.normalizedSize.xsmall, 
		fontFamily: Fonts.family.sfPro, 
		fontWeight: Fonts.weight.bold,
		color: '#1313AF',
		letterSpacing: 0.3,
	}
})

class LocationImage extends Component<NavigationInjectedProps> {

	_toSearchScreen = () => {
		this.props.navigation.navigate('BookmarkScreen')
	}

	render() {
		const { addressComponents, rating, name } = this.props;
		const city = _.nth(addressComponents,3)
		const state = _.nth(addressComponents,5)
		const updatedRating = rating.toFixed(1);

		return (
			<View style={styles.container}>
					
				<Image style={styles.heroImage} source={Images.tempHeroImage} />
				<LinearGradient colors={['rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.0)']} style={styles.topGradient} />
				<LinearGradient colors={['rgba(0, 0, 0, 0.0)', 'rgba(0, 0, 0, 0.75)']} style={styles.bottomGradient} />
				<View style={styles.goBackButtonContainer}>
					<TouchableOpacity onPress={this._toSearchScreen}>
						<Image style={styles.goBackIcon} source={Images.goIcon} />
					</TouchableOpacity>
				</View>
				<View style={styles.copyPlusRatingContainer}>
					<Text style={styles.cityPlusState}>
						{city.name}, {state.name}
					</Text>
					<View style={styles.businessNamePlusRating}>
						<Text style={styles.businessName} numberOfLines={1}>
							{name}
						</Text>
						<View style={styles.ratingContainer}>
							<Image style={styles.ratingsHeart} source={Images.heartIcon} />
							<View style={styles.ratingsNumber}>
								<Text>
									{updatedRating}
								</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
		)
	}
}

const mapStateToProps = state => {
	return {
		addressComponents: state.bookmarks.selectedLocationNotBookmarked.addressComponents,
		rating: state.bookmarks.selectedLocationNotBookmarked.rating,
		name: state.bookmarks.selectedLocationNotBookmarked.name,
	}
}

export default connect(mapStateToProps)(withNavigation(LocationImage));