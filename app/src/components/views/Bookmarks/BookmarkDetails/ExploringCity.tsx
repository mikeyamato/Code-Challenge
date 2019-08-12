import React, { Component } from 'react';
import { 
	View, 
	Text, 
	Image,
	StyleSheet,
	Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Images, Fonts } from '../../../../themes';
import { IExploringCityProps } from '../../../../types/bookmark';

const { width: SCREEN_WIDTH } = Dimensions.get('window');


const styles = StyleSheet.create<IExploringCityProps>({
	buildingImgContainer: {
		flex: .46,
		alignItems: 'center',
	},
	buildingBkgd: {
		flex: 1,
		position: 'absolute',
	},
	topBuildingGradient: {
		flex: .43,
		position: 'relative',
		paddingHorizontal: '100%',
  },
	bottomBuildingGradient: {
		flex: .57,
		position: 'relative',
		paddingHorizontal: '100%',
	},
	copyContainer: {
		flex: 1,
		width: SCREEN_WIDTH * 0.86,
		justifyContent: 'center',
	},
	topCopy: {
		position: 'absolute',
		fontSize: Fonts.normalizedSize.h3, 
		fontFamily: Fonts.family.sfPro, 
		fontWeight: Fonts.weight.regular,
		color: '#FFFFFF',
		letterSpacing: 0.4,
		top: '50%',
	},
	bottomCopy: {
		position: 'absolute',
		fontSize: Fonts.normalizedSize.medium, 
		fontFamily: Fonts.family.sfPro, 
		fontWeight: Fonts.weight.regular,
		color: '#D4C9D7',
		letterSpacing: 0.28,
		bottom: '27%',
	}
})

class ExploringCity extends Component {
	render() {
		return (
			<View style={styles.buildingImgContainer}>
				<Image style={styles.buildingBkgd} source={Images.bkmkBuildingBkgd} />
				<LinearGradient colors={['#FDFDFD', '#FDFDFD00']} style={styles.topBuildingGradient} />
				<LinearGradient colors={['#0A0A0A00', '#0A0A0A']} style={styles.bottomBuildingGradient} >
					<View style={styles.copyContainer}>
						<Text style={styles.topCopy}>
							Exploring Louisville BBQ
						</Text>
						<Text style={styles.bottomCopy}>
							Louisville, Kentucky
						</Text>
					</View>
				</LinearGradient>
			</View>
		)
	}
}

export default ExploringCity;