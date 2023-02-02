import React, {useState} from 'react';
import {
	Image,
	ImageStyle,
	StyleSheet,
	Text,
	TextStyle,
	TouchableOpacity,
	ViewStyle,
} from 'react-native';
import {User} from '../../../interfaces';

function Card({item}: {item: User}): JSX.Element {
	const [isFront, setIsFront] = useState(true);

	const showBack = () => {
		setIsFront(false);
	};

	const showFront = () => {
		setIsFront(true);
	};

	if (isFront) {
		return (
			<TouchableOpacity style={styles.container} onPress={showBack}>
				<Image source={{uri: item.avatar}} style={styles.avatar} />
				<Text style={styles.textBold}>
					{item.first_name} {item.last_name}
				</Text>
				<Text style={styles.text}>{item.employment.title}</Text>
			</TouchableOpacity>
		);
	}

	return (
		<TouchableOpacity style={styles.container} onPress={showFront}>
			<Text style={styles.text}>Username: {item.username}</Text>
			<Text style={styles.text}>Email: {item.email}</Text>
			<Text style={styles.text}>Phone: {item.phone_number}</Text>
			<Text style={styles.text}>
				Address: {item.address.street_address}, {item.address.street_name},{' '}
				{item.address.city}, {item.address.state}, {item.address.country}
			</Text>
		</TouchableOpacity>
	);
}

type CardStyleType = {
	container: ViewStyle;
	avatar: ImageStyle;
	text: TextStyle;
	textBold: TextStyle;
};

const styles = StyleSheet.create<CardStyleType>({
	container: {
		height: 250,
		flex: 1,
		borderRadius: 8,
		backgroundColor: '#dddddd',
		margin: 4,
		padding: 8,
	},
	avatar: {width: '100%', height: 150},
	text: {
		color: 'black',
	},
	textBold: {
		color: 'black',
		fontWeight: 'bold',
	},
});

export default Card;
