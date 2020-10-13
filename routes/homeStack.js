import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const Stack = createStackNavigator();
const homeStack = ({ navigation }) => {

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor:'#ada074',
        }
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={ () => ({ 
          headerTitle: () => <Header  title='Home' />,
        })}


      />
      <Stack.Screen name="Details" component={ReviewDetails} options={{ title: 'Details' }} />
    </Stack.Navigator>
  );
};


export default homeStack;