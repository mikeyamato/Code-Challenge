import React, { Component } from 'react';
import { 
	View, 
	StyleSheet,
} from 'react-native';

import { LocationImage, LocationMap } from './components'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
})

class Place extends Component {
	render() {
		return (
			<View style={styles.container}>
				<LocationImage/>
				<LocationMap/>
			</View>
		)
	}
}

export default Place;