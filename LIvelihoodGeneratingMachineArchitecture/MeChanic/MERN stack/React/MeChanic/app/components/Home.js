import React, { useState } from 'react'
import {View, Modal } from 'react-native'
import { globalStyles } from '../assets/styles/global';
import CarList from './CarList';
import WelcomePage from './WelcomePage'

export default function Home({ navigation }) {

    const [welcomeModel, setWelcomeModel] = useState(true);

    const navigateCarMenu = (item) => {
        navigation.navigate('CarMenu', item);
    }
    
    return (
        <View style={globalStyles.container}>

            <Modal visible={welcomeModel}>
                <WelcomePage setWelcomeModel={setWelcomeModel}></WelcomePage>
            </Modal>

            <CarList handleClick={navigateCarMenu}/>
        </View>
    )
}

//TODO:
//Form for adding car
//Form for SignIn and SignUp
//Max length for forms needed??????