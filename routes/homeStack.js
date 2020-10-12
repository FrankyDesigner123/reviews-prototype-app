import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const Stack = createStackNavigator();

export default homeStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerStyle:{backgroundColor: '#ffe343'}}}>
            <Stack.Screen name="Home" component={Home} options={{title: 'PopcornTime'}}/>
            <Stack.Screen name="Details" component={ReviewDetails} options={{title: 'Review Details'}}/>
        </Stack.Navigator> 
    );
};
