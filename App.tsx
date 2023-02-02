import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {RootRoutes} from './src/routes';
import {Provider} from 'react-redux';
import {store} from './src/stores';

export default function App(): JSX.Element {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<RootRoutes />
			</NavigationContainer>
		</Provider>
	);
}
