import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TodoForm from './components/TodoForm'
import ShowTodo, { Details } from './components/ShowTodo'
import Icon from 'react-native-vector-icons/MaterialIcons'
import EditModal from './components/EditModal'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTab_Navigation from './Navigation/BottomTabNavigation'
import SearchTodo from './components/SearchTodo'
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='BottomTab_Navigation' component={BottomTab_Navigation} />
      <Stack.Screen name='TodoForm' component={TodoForm} />
        <Stack.Screen name='ShowTodo' component={ShowTodo} />
        <Stack.Screen name='SearchTodo' component={SearchTodo} />
        <Stack.Screen name='EditModal' component={EditModal} />
      </Stack.Navigator>
      {/* <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen options={{
          tabBarIcon: ({color}) => (
            <Icon name="home" size={28} color={color} />
          ),
          tabBarShowLabel: false
        }} name='TodoForm' component={TodoForm} />
        <Tab.Screen options={{
          tabBarIcon: ({color}) => (
            <Icon name="fact-check" size={28} color={color} />
          ),
          tabBarShowLabel: false
        }} name='ShowTodo' component={ShowTodo} />
      </Tab.Navigator> */}
    </NavigationContainer>
    // <EditModal />
    )
  }