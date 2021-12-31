import React from 'react'
import { StyleSheet, TextInput, Text, View, Button } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export default function SignUp({ setWelcomeModel, setSignUpModel }) {

    const [emailText, onChangeEmail] = React.useState("");
    const [passwordText, onChangePassword] = React.useState("");
    const [passwordConfirmText, onChangePasswordConfirm] = React.useState("");
  
    const handleClick = () => {
        //check email and password format
        //hash password
        //add to DB
        //signIn
        alert(emailText + passwordText + passwordConfirmText);
        setWelcomeModel(false);
      }
    

    return (
        <View>
            <MaterialIcons name='close' size={28} onPress={() => setSignUpModel(false)}/>
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
            <TextInput
                style={styles.input}
                onChangeText={onChangePasswordConfirm}
                value={passwordConfirmText}
                placeholder="Confirm Password"
            />
            <Button 
                onPress={handleClick}
                title="Sign Up"
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