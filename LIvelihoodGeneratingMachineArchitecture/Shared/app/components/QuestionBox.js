import React from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../assets/styles/global';


const QuestionBox = ({name, difficulty, onClick}) => {

    return(
        <TouchableOpacity style={[globalStyles.buttonContainer]} onPress={onClick}>
            <View>
                <Text style={[globalStyles.buttonText]}>{name}</Text>
            </View>
            <View>
                <Text style={[globalStyles.buttonText]}>{difficulty}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default QuestionBox;
