import React, {useEffect, useState} from 'react';
import {
	ActivityIndicator,
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text,
	TextStyle,
	TouchableOpacity,
	ViewStyle,
} from 'react-native';
import {fetchUsers} from '../../apis';
import {User} from '../../interfaces';
import Card from './components/Card';

function HomeScreen(): JSX.Element {
	const [users, setUsers] = useState<User[]>([]);
	const [isFetching, setIsFetching] = useState(false);

	const getRandomUsers = async () => {
		setIsFetching(true);
		const randomUsers = await fetchUsers();
		setIsFetching(false);
		setUsers(randomUsers);
	};

	useEffect(() => {
		getRandomUsers();
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity style={styles.randomButton} onPress={getRandomUsers}>
				<Text style={styles.randomButtonText}>Random users</Text>
			</TouchableOpacity>
			<FlatList
				numColumns={2}
				style={styles.listCard}
				data={users}
				keyExtractor={item => item.uid}
				renderItem={({item}) => <Card item={item} />}
			/>
			{isFetching && (
				<ActivityIndicator style={styles.loading} size="large" color="blue" />
			)}
		</SafeAreaView>
	);
}

type HomeScreenStyleType = {
	container: ViewStyle;
	randomButton: ViewStyle;
	randomButtonText: TextStyle;
	loading: ViewStyle;
	listCard: ViewStyle;
};

const styles = StyleSheet.create<HomeScreenStyleType>({
	container: {
		flex: 1,
	},
	randomButton: {
		backgroundColor: 'blue',
		alignSelf: 'center',
		marginTop: 20,
		borderRadius: 8,
		paddingVertical: 4,
		paddingHorizontal: 10,
	},
	randomButtonText: {
		fontSize: 20,
	},
	loading: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	listCard: {
		marginTop: 16,
		flex: 1,
	},
});

export default HomeScreen;
