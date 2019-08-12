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
})

class LocationMap extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>
					Bye
				</Text>
			</View>
		)
	}
}

export default LocationMap;