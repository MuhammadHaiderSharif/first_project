// src/screens/Home.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {

    const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>{
            navigation.navigate('Details')
        } }
      />
    </View>
  );
};

export default HomeScreen;
