import { View, Text } from 'react-native'
import React from 'react'
import Login from './src/components/Login'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Signup from './src/components/Signup'
import UserDetails from './src/components/UserDetails'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='UserDetails' component={UserDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}