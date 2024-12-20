// src/screens/Details.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DetailsScreen = () => {
    const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() =>{
            navigation.navigate('Profile')
        }}
      />
    </View>
  );
};

export default DetailsScreen;
