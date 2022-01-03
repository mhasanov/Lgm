import { Text, View, Image, TouchableOpacity } from 'react-native';
import { globalStyles, images } from '../assets/styles/global';
import * as Animatable from 'react-native-animatable';
import { StyleSheet } from "react-native";


const SplashScreen = ({ navigation }) => {

    return(
        <View style={globalStyles.loginContainer}>
            <Image
                source={images.compnyAssets.logo}
                style={globalStyles.logo}
                resizeMode='stretch'
            />
            <Text style={globalStyles.text}>App Name Placeholder</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SplashScreen;
