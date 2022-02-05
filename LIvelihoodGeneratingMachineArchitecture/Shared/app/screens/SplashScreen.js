import { Text, View, Image, TouchableOpacity } from 'react-native';
import { globalStyles, images } from '../assets/styles/global';
import * as Animatable from 'react-native-animatable';
import { StyleSheet } from "react-native";
import { Button } from 'react-native';
import React from 'react';


const SplashScreen = ({ navigation }) => {
    

    return(
        <View style={globalStyles.loginContainer}>
            <View>
                <Text>Blind 75</Text>
            </View>
            <View>
                <Text>What is the Blind 75 website</Text>
            </View>
            <View>
                <Text>...........</Text>
            </View>
        </View>
    );
};

export default SplashScreen;
