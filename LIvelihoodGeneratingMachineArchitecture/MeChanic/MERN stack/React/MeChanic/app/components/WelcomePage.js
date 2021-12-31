import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Button, Modal } from 'react-native'
import { Platform } from 'react-native'
import SignIn from './SignIn'
import SignUp from './SignUp'

export default function WelcomePage({ setWelcomeModel }) {

    const [signUpModel, setSignUpModel] = useState(false);
    const [signInModel, setSignInModel] = useState(false);

    return (
        <View>
            
            <Modal visible={signUpModel}>
                <SignUp setWelcomeModel={setWelcomeModel} setSignUpModel={setSignUpModel}></SignUp>
            </Modal>
            <Modal visible={signInModel}>
                <SignIn setWelcomeModel={setWelcomeModel} setSignInModel={setSignInModel}></SignIn>
            </Modal>

            <Image resizeMode="contain" style={styles.welcomeImage} source={require("../assets/welcomegif.gif")} />
            <Text style={{color: "black"}}>Welcome to</Text>
            <Text style={{paddingBottom: 90, fontWeight: "bold", fontSize : 30, color: "black", fontStyle : "italic"}}>MeChanic</Text>

            <Button title='Sign Up' onPress={() => setSignUpModel(true)} />
            <Button title='Sign In' onPress={() => setSignInModel(true)} />
            <Button title='No thanks' onPress={() => setWelcomeModel(false)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      welcomeImage: {
        height: Platform.OS === "ios" ? 360 : Platform.OS === "web" ? 400 : 50,
        width: Platform.OS === "ios" ? 370 : Platform.OS === "web" ? 1000 : 50,
        paddingBottom: 450,
      },
})
