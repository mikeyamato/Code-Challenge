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
		flex: 1,
		alignItems: 'center',
	},
})

class Place extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>
					Hello
				</Text>
			</View>
		)
	}
}

export default Place;