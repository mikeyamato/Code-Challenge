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
// import { SearchBar } from 'react-native-elements';
import RNGooglePlaces from 'react-native-google-places';
import _ from 'lodash';

import { Images, Fonts } from '../../../themes';
import { ISearchProps } from '../../../types/search';

const styles = StyleSheet.create<ISearchProps>({
	// container: {
	// 	flex: .18,
	// 	width: '100%',
	// },
	// cancelButton: {
	// 	fontSize: Fonts.normalizedSize.input, 
	// 	fontFamily: Fonts.family.sfPro, 
	// 	fontWeight: Fonts.weight.regular,
	// 	color: '#007AFF',
	// 	letterSpacing: 0.41,
	// },
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
	
})

class Search extends Component<NavigationInjectedProps> {
	state = {
    search: '',
  };

	_toBookmarkScreen = () => {
		this.props.navigation.navigate('BookmarkScreen')
	}

	updateSearch = search => {

		this.setState({ search });

	}

	openSearchModal() {
		
		RNGooglePlaces.openAutocompleteModal(
			{
				country: 'US',
				type: 'establishment'
			}, []
		)
    .then((place) => {
        console.log(place);
        // place represents user's selection from the
        // suggestions and it is a simplified Google Place object.
    })
    .catch(error => console.log(error.message));  // error is a Javascript Error object
  };

	render() {
		const { search } = this.state;
		return (
			<View>
				<SafeAreaView style={styles.safeAreaView}>
				{/* <SearchBar
					placeholder='Search'
					onChangeText={this.updateSearch}
					value={search}
					// platform='ios'
					onCancel={this._toBookmarkScreen}
					containerStyle={styles.searchBarContainer}
					
				/> */}
				<TouchableOpacity onPress={this.openSearchModal}>
					<Text style={styles.cancelButton}>
						Open
					</Text>
				</TouchableOpacity>	
				</SafeAreaView>
			</View>
		)
	}
}

export default withNavigation(Search);