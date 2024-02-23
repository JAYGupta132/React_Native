import { View, Text } from 'react-native'
import React from 'react'
import MyTabs from '../Navigation/MyTabs'

export default function Home() {
  return (
    <View style={{flex: 1}}>
      <MyTabs />
    </View>
  )
}