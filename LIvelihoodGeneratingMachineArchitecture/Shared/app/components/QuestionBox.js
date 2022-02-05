import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles } from '../assets/styles/global';


const QuestionBox = ({name, difficulty, onClick}) => {

    return(
        <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{name} ({difficulty})</Text>
            </View>
            
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#C11F83",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 25,
        marginTop: 10
    },
    buttonText:{
        color: "white",
        fontSize: 15,
        textAlign: "center"
    }
});

export default QuestionBox;
