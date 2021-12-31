import React, { useState } from 'react';
import { FlatList, TouchableOpacity, Text, View } from 'react-native'
import { globalStyles } from '../assets/styles/global';
import CarItem from './CarItem';

export default function CarList({ navigation, handleClick }) {
    const [cars, setCars] = useState([
        { key : '1', make: 'Cadillac', model: 'CT4', year: '2021'}
    ]);
    

    return (
      <View style={globalStyles.container}>
        <FlatList
          data={cars}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => handleClick(item)}>
              <CarItem item={item}/>
            </TouchableOpacity>
          )}
        />
      </View>
    );
}