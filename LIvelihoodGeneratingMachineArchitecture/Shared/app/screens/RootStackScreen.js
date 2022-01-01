import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import SplashScreen from './SplashScreen';


const Stack = createStackNavigator()

export default function RootStackScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={SplashScreen} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
        <Stack.Screen name='SignIn' component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}