import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Index from './src/components/Index'
import Employees from './src/components/Employees'
import AddDetails from './src/components/AddDetails'
import MarkAttendance from './src/components/MarkAttendance'
import User from './src/components/User'
import { Summary } from './src/components/Summary'
import Calendars from './src/components/Calendar'


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Index' component={Index} />
        <Stack.Screen name='Employee' component={Employees} />
        <Stack.Screen name='AddDetails' component={AddDetails} />
        <Stack.Screen name='MarkAttendance' component={MarkAttendance} />
        <Stack.Screen name='User' component={User} />
        <Stack.Screen name='Summary' component={Summary} />
        <Stack.Screen name='Calendars' component={Calendars} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}