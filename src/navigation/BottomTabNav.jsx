import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../components/Home'
import Settings from '../components/Settings'
import Explore from '../components/Explore'
const BottomTab = createBottomTabNavigator()

export default function StackNav() {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen name='Home' component={Home} />
      <BottomTab.Screen name='Settings' component={Settings} />
      <BottomTab.Screen name='Explore' component={Explore} />
    </BottomTab.Navigator>
  )
}

const styles = StyleSheet.create({})