import { View, Text, Button } from 'react-native'
import React from 'react'

export default function TopOne({navigation}) {
  return (
    <View>
      <Text>TopOne</Text>
      <Button onPress={()=>navigation.navigate("Settings")} title='Home' />
    </View>
  )
}