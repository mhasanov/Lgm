import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../components/Home';
import UserProfile from "../components/UserProfile";
import CarMenu from '../components/CarMenu';
import React from "react";
import Header from "../shared/Header";

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {                
                headerTitle: () => <Header navigation={navigation} title='Home'/>
            }
        }
        
    },
    CarMenu: {
        screen: CarMenu
    },
    UserProfile: {
        screen: UserProfile
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);