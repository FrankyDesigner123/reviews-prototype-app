import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
    <Navigator screenOptions={{headerStyle: {backgroundColor: '#f4511e', height: 90}}}>
        <Screen name="Home" component={Home} options={{ title: 'All Movies' }}/>
        <Screen name="Details" component={ReviewDetails} options={{ title: 'Review Details' }}/>
    </Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer>
        <HomeNavigator/>
    </NavigationContainer>
)
