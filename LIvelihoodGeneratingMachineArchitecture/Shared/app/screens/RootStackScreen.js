import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";


const Stack = createStackNavigator()

export default function RootStackScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={LoginScreen} />
        <Stack.Screen name='Home2' component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}