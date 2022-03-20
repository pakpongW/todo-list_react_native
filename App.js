import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Newtodo from './components/Newtodo';
import Home from './components/Home';

const Tap = createNativeStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Tap.Navigator   screenOptions={{headerShown: false}}>
        <Tap.Screen name="Home" component={Home} />
        <Tap.Screen name="Add" component={Newtodo} />
      </Tap.Navigator>
    </NavigationContainer>
  );
}


export default App;
