import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	avatar: {
		width: 60,
		height: 60,
		marginRight: 15,
		borderRadius: 50,
	},
	leftContainer: {
		flexDirection: 'row',
	},
	midContainer: {
		justifyContent: 'space-around',
	},
	container: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		padding: 10,
	},
	username: {
		fontWeight: 'bold',
		fontSize: 16,
	},
	lastMessage: {
		fontSize: 16,
		color: 'grey',
	},
	occupation: {
		color: 'grey',
		fontSize: 1,
	},
});

export default styles;
