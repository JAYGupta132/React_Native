import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Screens/HomeScreen';
import ContactScreen from '../Screens/ContactScreen';
import AboutScreen from '../Screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function StackSetting() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='About' component={AboutScreen} />
      <Stack.Screen name='Contact' component={ContactScreen} />
    </Stack.Navigator>
  )
}