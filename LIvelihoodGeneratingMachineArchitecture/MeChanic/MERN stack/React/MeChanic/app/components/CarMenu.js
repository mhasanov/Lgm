import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CarMenu({ navigation }) {
    return (
        <View>
            <Text style={styles.item}>{navigation.getParam('make')}</Text>
            <Text style={styles.item}>{navigation.getParam('model')}</Text>
            <Text style={styles.item}>{navigation.getParam('year')}</Text>
            {/* */}
        </View>
        
    )
}

const styles = StyleSheet.create({
    item: {
        color: 'black',
        height: 40,
    },
  });