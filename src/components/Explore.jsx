import { View, Text } from 'react-native'
import React from 'react'
import { DrawerExplore } from '../navigation/DrawerExplore'

export default function Explore() {
  return (
    <View style={{flex: 1}} >
      <DrawerExplore />
    </View>
  )
}