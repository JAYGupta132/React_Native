import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TodoForm from '../components/TodoForm';
import ShowTodo from '../components/ShowTodo';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SearchTodo from '../components/SearchTodo';

const Tab = createBottomTabNavigator();

export default function BottomTab_Navigation() {
  return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen options={{
          tabBarIcon: ({color}) => (
            <Icon name="home" size={28} color={color} />
          ),
          tabBarShowLabel: false
        }} name='TodoForm' component={TodoForm} />
        <Tab.Screen options={{
          tabBarIcon: ({color}) => (
            <Icon name="search" size={28} color={color} />
          ),
          tabBarShowLabel: false
        }} name='SearchTodo' component={SearchTodo} />
        <Tab.Screen options={{
          tabBarIcon: ({color}) => (
            <Icon name="fact-check" size={28} color={color} />
          ),
          tabBarShowLabel: false
        }} name='ShowTodo' component={ShowTodo} />
      </Tab.Navigator>
   
  )
}