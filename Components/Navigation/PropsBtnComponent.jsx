import React from 'react'
import { Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from './Login'
import { Home } from './Home'
import { Search } from './Search'

export default function PropsBtnComponent() {
  const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer>
    <Stack.Navigator 
       screenOptions={{
        headerStyle: {
          backgroundColor: 'rgba(50,50,50,0.2)',
        },
        headerTintColor: 'blue'
      }}
    >
    <Stack.Screen name='Login' component={Login} 
      // options={{
      //   title: 'User Login',
      //   headerStyle: {
      //     backgroundColor: 'rgba(50,50,50,0.2)',
      //   },
      //   headerTintColor: 'blue'
      // }}
    />
      <Stack.Screen name= 'Home' component={Home} 
        options={{
          headerTitle: ()=><Button title='left' />,
          headerRight: ()=><Search />,
        headerStyle: {
          backgroundColor: 'rgba(50,50,50,0.2)',
        },
        headerTintColor: 'blue'
      }}
      />
    </Stack.Navigator>
   </NavigationContainer>
  )
}
