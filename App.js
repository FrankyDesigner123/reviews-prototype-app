import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import { AppLoading } from 'expo';
import { AppNavigator } from './routes/homeStack';

const getFonts = () =>  Font.loadAsync({
    'poppins-light': require('./assets/fonts/Poppins-Light.ttf'),
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
});


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return(
      <AppNavigator />
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={()=> setFontsLoaded(true)} 
      />
    )
  }

}

 