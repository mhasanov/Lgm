import React, {useState} from "react";
import { Text, View, Image } from 'react-native';
import { globalStyles, images } from '../assets/styles/global';

const Questions = ({ navigation }) => {

    /*

    var not_started = [];


    //TODO:
    for (let i = 0; i < 1; i++) {               //Replace 1 with 75
        //if question is not started    //Check user database
        not_started.push(
            <View key={i}>
                <Text>{Questions_json.name[0]}</Text>
            </View>
        );
    }
      
    */
      
    return(
        <View style={globalStyles.loginContainer}>
            <View>
            </View>
            <View>
                <View>
                    <Text>Not Started</Text>
                </View>

                <View>
                    <Text>In Progress</Text>
                </View>

                <View>
                    <Text>Complete</Text>
                </View>
            </View>
        </View>
    );
};

export default Questions;
