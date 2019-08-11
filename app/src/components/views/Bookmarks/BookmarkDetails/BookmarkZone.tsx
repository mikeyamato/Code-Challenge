import React, { Component } from 'react';
import { 
	View, 
	Text, 
	ImageBackground,
	Image,
	SafeAreaView,
	StyleSheet
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

// import { Images, Colors } from '../../../themes';
import { Bookmarks } from './BookmarkStatus';

const styles = StyleSheet.create({
	// container: {
	// 	flex: 1,
	// 	alignItems: 'center',
	// },
	container: {
		flex: .36,
		position: 'relative',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		// borderWidth: 1,
		// borderColor: Colors.facebook,
	},
})

class BookmarkZone extends Component {
	render() {
		return (
			<Bookmarks />
		)
	}
}

export default BookmarkZone;