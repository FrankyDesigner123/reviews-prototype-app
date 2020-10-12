import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';

const Stack = createStackNavigator();

export default AboutStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerStyle:{backgroundColor: '#fef'}}}>
            <Stack.Screen name='About' component={About} options={{title: 'About PopcornTime'}}/>
        </Stack.Navigator>
    )
}