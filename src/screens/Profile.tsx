import React from 'react';
import { View, Text, Button } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {

    // const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => {
            // navigation.navigate;
        }}
      />
    </View>
  );
};

export default ProfileScreen;
