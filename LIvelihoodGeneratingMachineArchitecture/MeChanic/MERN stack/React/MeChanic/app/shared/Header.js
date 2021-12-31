import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

//TODO: Add onPress to MaterialIcons

export default function Header({ navigation }) {

    const navigateUser = () => {
        navigation.navigate('UserProfile');
    }

    return (
        <View style={styles.header}>
            <View style={styles.idk}>
                <Text style={styles.headerText}>MeChanic</Text>
            </View>
            <View style={{marginLeft: 'auto'}}>
                <FontAwesome5 name='user' size={28} onPress={navigateUser} style={styles.icon}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        fontWeight: "bold",
        fontSize : 30,
        color: "black",
        fontStyle : "italic",
        letterSpacing: 2,
        marginRight: 'auto',
    },
});