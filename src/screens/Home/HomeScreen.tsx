import React from 'react';
import {SafeAreaView, StyleSheet, Text, ViewStyle} from 'react-native';

function HomeScreen(): JSX.Element {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={{color: 'black'}}>Hi</Text>
		</SafeAreaView>
	);
}

type HomeScreenStyleType = {
	container: ViewStyle;
};

const styles = StyleSheet.create<HomeScreenStyleType>({
	container: {
		flex: 1,
	},
});

export default HomeScreen;
