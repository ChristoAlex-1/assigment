import React from 'react';
import { View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { Entypo, FontAwesome } from '@expo/vector-icons';

const index = () => {
	const Stack = createStackNavigator();
	const Tab = createBottomTabNavigator();

	const HistoryNavigator = () => {
		return (
			<Stack.Navigator>
				<Stack.Screen name='HistoryScreen' component={HistoryScreen} />
			</Stack.Navigator>
		);
	};

	const HomeNavigator = () => {
		return (
			<Stack.Navigator>
				<Stack.Screen
					name='Home'
					component={HomeScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name='Details' component={DetailsScreen} />
			</Stack.Navigator>
		);
	};

	return (
		<NavigationContainer>
			<Tab.Navigator
				tabBarOptions={{
					activeTintColor: '#e91e63',
				}}
			>
				<Tab.Screen
					name='Home'
					component={HomeNavigator}
					options={{
						tabBarLabel: 'Home',
						tabBarIcon: ({ color, size }) => (
							<Entypo name='home' size={24} color={color} />
						),
					}}
				/>

				<Tab.Screen
					name='View History'
					component={HistoryNavigator}
					options={{
						tabBarLabel: 'View History',
						tabBarIcon: ({ color, size }) => (
							<FontAwesome name='history' size={24} color={color} />
						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default index;
