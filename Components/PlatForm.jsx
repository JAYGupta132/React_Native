import React from 'react'
import { View, Text, Platform } from 'react-native'

export default function PlatForm() {
  return (
    <View>
      <Text>PlatForm: {Platform.OS}</Text>
      <Text>PlatForm: {Platform.Version}</Text>
      <Text>PlatForm: {JSON.stringify(Platform)}</Text>
    </View>
  )
}
