import React, { Component } from 'react';
import { 
	View, 
	Text, 
	Image,
	StyleSheet,
	TouchableOpacity,
	Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Colors, Images, Fonts } from '../../../../themes';
import { addLocation } from '../../../../store/actions';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 0.38,
		position: 'relative',
		alignItems: 'center',
		width: '100%',
		zIndex: 1,
		backgroundColor: '#FFFFFF',
		borderTopLeftRadius: 11.25,
		borderTopRightRadius: 11.25,
		borderWidth: 1,
		borderColor: 'green',
	},
	buttonContainer: {
		position: 'absolute',
		top: '6.2%',
		width: '86%',
	},
	locationNotPinnedContainer: {
		borderRadius: 22.5,
		backgroundColor: '#1313AF',
		alignItems: 'center',
		height: SCREEN_HEIGHT * 0.055,
		justifyContent: 'center'
	},
	locationPinnedContainer: {
		borderRadius: 22.5,
		backgroundColor: '#00FF1C',
		alignItems: 'center',
		height: SCREEN_HEIGHT * 0.055,
		justifyContent: 'center'
	},
	buttonNotPinnedCopy: {
		position: 'relative',
		fontSize: Fonts.normalizedSize.small, 
		fontFamily: Fonts.family.sfPro, 
		fontWeight: Fonts.weight.medium,
		color: '#FFFFFF',
		letterSpacing: 0.31,
	}, 
	buttonPinnedCopy: {
		position: 'relative',
		fontSize: Fonts.normalizedSize.small, 
		fontFamily: Fonts.family.sfPro, 
		fontWeight: Fonts.weight.medium,
		color: '#1C1F1F',
		letterSpacing: 0.31,
	}, 
	buttonCheckMarkContainer: {
		marginRight: '5%',
	},
	buttonCheckMark: {
	},
	addressContainer: {
		position: 'absolute',
		top: '26.2%',
		width: '86%',
	}, 
	townPinContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	}, 
	neighborhoodDistrict: {
		marginLeft: '1%',
		fontSize: Fonts.normalizedSize.tiny, 
		fontFamily: Fonts.family.sfPro, 
		fontWeight: Fonts.weight.bold,
		color: '#030303',
		letterSpacing: 0.3,
	},
	revisedAddress: {
		fontSize: Fonts.normalizedSize.tiny, 
		fontFamily: Fonts.family.sfPro, 
		fontWeight: Fonts.weight.regular,
		color: '#030303',
		letterSpacing: 0.33,
		marginTop: '1%',
	},
})

class LocationMap extends Component {
	state = {
		bookmarked: false,
		buttonCopy: 'Pin to Trip',
	}

	_bookmarkLocation = () => {
		if(!this.state.bookmarked){
			this.setState({
				bookmarked: true,
				buttonCopy: 'Pinned to Trip',
			})
			// save location to redux
			this.props.onLocationBookmarked(this.props.allLocationInfo);
		}
	}

	render() {
		const { bookmarked, buttonCopy, buttonColor } = this.state;
		const { addressComponents, address } = this.props;
		const neighborhoodDistrict = _.nth(addressComponents,2) as string;
		const revisedAddress = _.replace(address,', USA','');

		return (
			<View style={styles.container}>
				<View style={styles.buttonContainer}>
					<TouchableOpacity onPress={this._bookmarkLocation}>
						{bookmarked ? (
							<View style={styles.locationPinnedContainer}>
								<Text style={styles.buttonPinnedCopy}>
									<View style={styles.buttonCheckMarkContainer}>
										<Image style={styles.buttonCheckMark} source={Images.buttonCheckMark}/>
									</View>
									{buttonCopy}
								</Text>
							</View>
							) : (
							<View style={styles.locationNotPinnedContainer}>
								<Text style={styles.buttonNotPinnedCopy}>
									{buttonCopy}
								</Text>
							</View>
							)
						}
					</TouchableOpacity>
				</View>
				<View style={styles.addressContainer}>
					<View style={styles.townPinContainer}>
						<Image source={Images.townPinIcon}/>
						<Text style={styles.neighborhoodDistrict}>
							{neighborhoodDistrict.name}
						</Text>
					</View>
					<Text style={styles.revisedAddress}>
						{revisedAddress}
					</Text>
				</View>
				<View />
			</View>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onLocationBookmarked: (chosenLocation) => dispatch(addLocation(chosenLocation)),
	}
}

const mapStateToProps = state => {
	return {
		addressComponents: state.bookmarks.selectedLocationNotBookmarked.addressComponents,
		address: state.bookmarks.selectedLocationNotBookmarked.address,
		allLocationInfo: state.bookmarks.selectedLocationNotBookmarked,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationMap);