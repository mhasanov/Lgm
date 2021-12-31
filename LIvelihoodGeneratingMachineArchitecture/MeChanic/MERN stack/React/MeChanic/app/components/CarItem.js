import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { images } from '../assets/styles/global'

export default function CarItem({ item }) {
    return (

        <View style={styles.container}>
           <Image resizeMode="contain" style={styles.image} source={images.cars[item.year + item.make + item.model]} />
           <View style={styles.textBox}>
                <Text style={styles.item}>{item.make} <Text style={styles.item}>{item.model}</Text></Text>
                <Text style={styles.item}>{item.year}</Text>
            </View>
        </View>
        
    )
}


const styles = StyleSheet.create({
    item: {
        color: 'white',
        height: 40,
    },
    image: {
        height: 80,
        width: 180,
    },
    container: {
        flexDirection: 'row',
        backgroundColor: '#000',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
      },
      textBox: {
          paddingLeft: 30,
      }
  });