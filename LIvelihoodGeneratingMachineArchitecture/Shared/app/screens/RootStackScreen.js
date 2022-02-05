import React from 'react'
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import SplashScreen from './SplashScreen';
import { View } from 'react-native-animatable';
import Icon from 'react-native-vector-icons/AntDesign';
import Questions from './Questions';
import { globalStyles } from '../assets/styles/global';

const Stack = createStackNavigator()

/*
        <Stack.Screen name='Home' component={SplashScreen} options={{
          headerRight: () => (
            <Icon.Button name="google" size={30} color="#" />
          ),
        }}/>
        options={({ navigation, route }) => ({
          headerTitle: props => <LogoTitle {...props} />,
        })}
      />
*/
export default function RootStackScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
      <Stack.Screen name='Home' component={SplashScreen} options={({navigation}) => ({
          headerRight: () => (
            <View>
              <Icon.Button name="google" size={30} color="#" />
              <Button onPress={() => navigation.navigate('Questions')} title="Questions" color="#841584" accessibilityLabel="Questions" />
            
            </View>
          ),
        })}/>

        <Stack.Screen name='Questions' component={Questions} options={{
          headerRight: () => (
            <Icon.Button name="google" size={30} color="#" />
          ),
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
