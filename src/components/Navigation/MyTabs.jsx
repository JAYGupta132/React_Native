import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import HomeScreen from '../Screens/HomeScreen'
import AboutScreen from '../Screens/AboutScreen'
import ContactScreen from '../Screens/ContactScreen'


const TopTab = createMaterialTopTabNavigator()

export default function MyTabs() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="HomeScreen" component={HomeScreen} />
      <TopTab.Screen name="About" component={AboutScreen} />
      <TopTab.Screen name="Contact" component={ContactScreen} />
    </TopTab.Navigator>
  )
}