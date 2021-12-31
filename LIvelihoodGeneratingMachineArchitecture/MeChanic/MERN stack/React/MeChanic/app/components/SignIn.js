import React, {useState} from 'react'
import { StyleSheet, TextInput, Modal, View, Button } from 'react-native'
import { globalStyles } from '../assets/styles/global';
import { MaterialIcons } from '@expo/vector-icons';

export default function SignIn({ setWelcomeModel, setSignInModel }) {

    const [emailText, onChangeEmail] = React.useState("");
    const [passwordText, onChangePassword] = React.useState("");
  
    const handleClick = () => {
        //Authenticate
        alert(emailText + passwordText);
        setWelcomeModel(false);
    }

    return (
        <View style={globalStyles.container}>
            <MaterialIcons name='close' size={28} onPress={() => setSignInModel(false)}/>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={emailText}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={passwordText}
                placeholder="Password"
            />
            <Button onPress={handleClick}
                title="Sign In"
                color="#e02d30"
                accessibilityLabel="Submit email and password."
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        color: 'white',
        borderColor: 'white',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
  });