import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';
import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


