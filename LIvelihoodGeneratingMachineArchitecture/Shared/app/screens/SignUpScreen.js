import React, {useState} from "react";
import { Text, View, Image } from 'react-native';
import { globalStyles, images } from '../assets/styles/global';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import FormTextClicable from '../components/FormTextClicable';


const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const[password, setPassword] = useState();
    const[confirmPassword, setConfirmPassword] = useState();
    const SignUp = () => {};

    return(
        <View style={globalStyles.loginContainer}>
            <Image
                source={images.compnyAssets.logo}
                style={globalStyles.logo}
            />
            <Text style={globalStyles.text}>App Name Placeholder</Text>
            <FormInput
                lavelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                lavelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                secureTextEntry={true}
            />
            <FormInput
                lavelValue={confirmPassword}
                onChangeText={(userPassword) => setConfirmPassword(userPassword)}
                placeholderText="Confirm password"
                secureTextEntry={true}
            />
            <FormButton
                buttonTitle="Sign Up"
                onPress={() => Signup()}
            />
        </View>
    );
};

export default SignUpScreen;