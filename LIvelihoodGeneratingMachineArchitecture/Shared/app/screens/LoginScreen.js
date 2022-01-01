import React, {useState} from "react";
import { Text, View, Image } from 'react-native';
import { globalStyles, images } from '../assets/styles/global';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import FormTextClicable from '../components/FormTextClicable';
import SocialButton from '../components/SocialButton';


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const[password, setPassword] = useState();
    const SignIn = () => {};

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
            <FormButton
                buttonTitle="Sign In"
                onPress={() => SignIn()}
            />
            <FormTextClicable
                style={globalStyles.forgotButton}
                textStyle={globalStyles.navButtonText}
                onPress={() => {}}
                text="Forgot Password?"
            />

            <SocialButton
                buttonTitle="Sign In with Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => {}}
            />
            <SocialButton
                buttonTitle="Sign In with Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => {}}
            />

        </View>
    );
};

export default LoginScreen;