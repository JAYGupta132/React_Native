import React from 'react'
import { View, StatusBar } from 'react-native'

export default function Status_Bar() {
  return (
    <View>
      <StatusBar 
        backgroundColor={'lightgreen'}
        barStyle={'dark-content'}
        hidden={false}
      />
    </View>
  )
}
