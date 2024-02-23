import { View, Text } from 'react-native'
import React from 'react'
import CustomCheckBox from './scr/components/CustomCheckBox'
import CustomImagePicker from './scr/components/CustomImagePicker'

export default function App() {
  return (
    <View>
      <CustomCheckBox />
      <CustomImagePicker />
    </View>
  )
}