import { View, Text } from 'react-native'
import React from 'react'
import { DrawerExplore } from '../Navigation/DrawerExplore'

export default function Explore() {
  return (
    <View style={{flex: 1}} >
      <DrawerExplore />
    </View>
  )
}