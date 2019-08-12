import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
	View, 
	Text, 
	StyleSheet
} from 'react-native';

import { Fonts } from '../../../../../themes';
import { IBookmarkNotPresentProps } from '../../../../../types/bookmark';

const styles = StyleSheet.create<IBookmarkNotPresentProps>({
	container: {
		flex: .36,
		position: 'relative',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	topCopy: {
		position: 'absolute',
		fontSize: Fonts.normalizedSize.regular, 
		fontFamily: Fonts.family.sfPro, 
		fontWeight: Fonts.weight.regular,
		color: '#808080',
		letterSpacing: 0.55,
		top: '39%',
	},
	bottomCopy: {
		position: 'absolute',
		fontSize: Fonts.normalizedSize.xsmall, 
		fontFamily: Fonts.family.sfPro, 
		fontWeight: Fonts.weight.regular,
		color: '#ACB7B9',
		letterSpacing: 0.4,
		bottom: '45%',
	}
})

class Bookmarks extends Component {
	render() {
		const { bookmarksExist } = this.props;
		return (
			<View style={styles.container}>
				{bookmarksExist ? (
					<Text style={styles.topCopy}>
						This trip NOT is empty
				</Text>
				) : (
					<Text style={styles.topCopy}>
						This trip is empty
				</Text>
				)}
				<Text style={styles.bottomCopy}>
					Click the blue plus to pin a place
				</Text>
			</View>
		)
	}
}

const mapStateToProps = state => {
	return {
		bookmarksExist: state.bookmarks.bookmarksExists,
	}
}

export default connect(mapStateToProps)(Bookmarks);