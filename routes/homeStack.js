import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
    <Navigator>
        <Screen name="Home" component={Home}/>
        <Screen name="Details" component={ReviewDetails}/>
    </Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer>
        <HomeNavigator/>
    </NavigationContainer>
)
