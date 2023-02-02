import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {HomeScreen} from '../screens';
import {RootNavigationParamList} from '../types';

const RootStack = createStackNavigator<RootNavigationParamList>();

export function RootRoutes(): JSX.Element {
	return (
		<RootStack.Navigator screenOptions={{headerShown: false}}>
			<RootStack.Screen name="Home" component={HomeScreen} />
		</RootStack.Navigator>
	);
}
