import React, {useState} from "react";
import { Text, View, Image } from 'react-native';
import { globalStyles, images } from '../assets/styles/global';
import { QuestionsInfo } from "../utils/QuestionsInfo";
import QuestionBox from "../components/QuestionBox";

const Questions = ({ navigation }) => {

    var stringOf75BoolValues = "0121"//Check user database

    var questionNumbersNotComplete = []
    var questionNumbersInProgress = []
    var questionNumbersComplete = []

    for (let i = 0; i < stringOf75BoolValues.length; i++) {
        if(stringOf75BoolValues.charAt(i) == '0'){
            
            questionNumbersNotComplete.push(
                <View key={i}>
                    <QuestionBox name={QuestionsInfo.name[i]}
                        difficulty={QuestionsInfo.difficulty[i]}
                        onClick={() => {navigation.navigate('QuestionScreen', {itemId: i})}} />
                </View>
            );
        }
        else if(stringOf75BoolValues.charAt(i) == '1'){
            questionNumbersInProgress.push(
                <View key={i}>
                    <QuestionBox name={QuestionsInfo.name[i]} difficulty={QuestionsInfo.difficulty[i]} onClick={() => {navigation.navigate('QuestionScreen', {itemId: i})}} />
                </View>
            );
        }
        else if(stringOf75BoolValues.charAt(i) == '2'){
            questionNumbersComplete.push(
                <View key={i}>
                    <QuestionBox name={QuestionsInfo.name[i]} difficulty={QuestionsInfo.difficulty[i]} onClick={() => {navigation.navigate('QuestionScreen', {itemId: i})}} />
                </View>
            );
        }
    }

      
    return(
        <View style={globalStyles.loginContainer}>
            <View>
            </View>
            <View>
                <View>
                    <Text>Not Started</Text>
                    {questionNumbersNotComplete}
                </View>

                <View>
                    <Text>In Progress</Text>
                    {questionNumbersInProgress}
                </View>

                <View>
                    <Text>Complete</Text>
                    {questionNumbersComplete}
                </View>
            </View>
        </View>
    );
};

export default Questions;
