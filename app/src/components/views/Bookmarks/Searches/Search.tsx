import React, { Component } from 'react';
import { 
	View, 
	Text, 
	Image,
	StyleSheet,
	TouchableOpacity,
	SafeAreaView,
} from 'react-native';
import { 
	withNavigation,
	// https://dev.to/andreasbergqvist/react-navigation-with-typescript-29ka
	NavigationInjectedProps
} from 'react-navigation';
import RNGooglePlaces from 'react-native-google-places';
import { connect } from 'react-redux';

import { Images, Fonts } from '../../../../themes';
import { ISearchProps } from '../../../../types/search';
import { locationNotBookmarked } from '../../../../store/actions';

const styles = StyleSheet.create<ISearchProps>({
	safeAreaView: {
		flex: 0,
		backgroundColor: '#F8F8F8',
		opacity: 82,
	},
	searchBarContainer: {
		backgroundColor: '#F8F8F8',
		opacity: 82,
		borderBottomColor: '#e5e4ea',
		borderBottomWidth: 1,
	},
	buttonContainer: {
	},
})

class Search extends Component<NavigationInjectedProps> {

	_openSearchModal = async () => {
		try {
			const chosenLocation = await RNGooglePlaces.openAutocompleteModal(
				{
					country: 'US',
					type: 'establishment'
				}, []
			)
			console.log('***** chosenLocation: ', chosenLocation)
			this.props.onLocationSelection(chosenLocation)
			this.props.navigation.navigate('PlaceScreen')
		} catch (error) {
			console.log(error.message)
		}
	}	
	
	render() {
		return (
			<View>
				<TouchableOpacity onPress={this._openSearchModal}>
					<Image style={styles.buttonContainer} source={Images.bkmkBlueButton}/>
				</TouchableOpacity>	
			</View>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onLocationSelection: (chosenLocation) => dispatch(locationNotBookmarked(chosenLocation)),
	}
}

export default connect(null, mapDispatchToProps)(withNavigation(Search));