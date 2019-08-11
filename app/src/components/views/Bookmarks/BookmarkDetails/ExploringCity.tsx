import React, { Component } from 'react';
import { 
	View, 
	Text, 
	ImageBackground,
	Image,
	SafeAreaView,
	StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Images, Colors } from '../../../../themes';

const styles = StyleSheet.create({
	buildingImgContainer: {
		flex: .46,
		alignItems: 'center',
		// borderWidth: 1,
		// borderColor: Colors.black,
	},
	buildingBkgd: {
		flex: 1,
		width: '100%',
		position: 'absolute',
		// borderWidth: 1,
		// borderColor: Colors.yellow,
	},
	topBuildingGradient: {
		flex: .43,
		position: 'relative',
		paddingHorizontal: '100%',
		// borderWidth: 1,
		// borderColor: Colors.red,
  },
	bottomBuildingGradient: {
		flex: .57,
		position: 'relative',
		paddingHorizontal: '100%',
		// borderWidth: 1,
		// borderColor: Colors.black,
  },
})

class ExploringCity extends Component {
	render() {
		return (
			<View style={styles.buildingImgContainer}>
				<Image style={styles.buildingBkgd} source={Images.bkmkBuildingBkgd} />
				<LinearGradient colors={['#FDFDFD', '#FDFDFD00']} style={styles.topBuildingGradient} />
				<LinearGradient colors={['#0A0A0A00', '#0A0A0A']} style={styles.bottomBuildingGradient} />
			</View>
		)
	}
}

export default ExploringCity;