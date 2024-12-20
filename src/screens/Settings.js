// src/screens/Settings.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {

    const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => {
            navigation.navigate('Home')
        }
    }
      />
    </View>
  );
};

export default SettingsScreen;
