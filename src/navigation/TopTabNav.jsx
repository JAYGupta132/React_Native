import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import TopOne from '../components/TopOne'
import TopTwo from '../components/TopTwo'

const TopTab = createMaterialTopTabNavigator()

export default function TopTabNav() {
  return (
    <TopTab.Navigator>
    
      <TopTab.Screen name='TopOne' component={TopOne} />
      <TopTab.Screen name='TopTwo' component={TopTwo} />
    </TopTab.Navigator>
  )
}

const styles = StyleSheet.create({})