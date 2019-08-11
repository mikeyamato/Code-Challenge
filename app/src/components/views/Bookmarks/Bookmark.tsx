import React, { Component } from 'react';
import { 
	View, 
	StyleSheet
} from 'react-native';

import { WeatherDetails, ExploringCity, BookmarkZone } from './BookmarkDetails';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
})

class Bookmark extends Component {
	render() {
		return (
			<View style={styles.container}>
				<WeatherDetails />
					<BookmarkZone />
				<ExploringCity />
			</View>
		)
	}
}

export default Bookmark;