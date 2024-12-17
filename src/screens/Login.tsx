// src/screens/Login.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
// import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
  const [username, setUsername] = useState('');

//   const navigation = useNavigation();
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{
          borderWidth: 1,
          margin: 10,
          padding: 10,
          width: '80%',
        }}
      />
      <Button
        title="Login"
        onPress={() => {
          if (username) {
            // navigation.navigate 
          } else {
            alert('Please enter a username');
          }
        }}
      />
    </View>
  );
};

export default LoginScreen;
