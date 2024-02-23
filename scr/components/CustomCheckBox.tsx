import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

// import CheckBox from 'react-native-check-box'
import CheckBox from 'react-native-check-box'

const CustomCheckBox = () => {
  const [isCheckbChecked, setIsCheckbxChecked] = useState(true)
  return (
    <View style={{flexDirection:'row', alignItems: 'center'}}>
      {/* <Text>Clickable Checkbox</Text> */}
    <CheckBox
    style={{flex: 1, padding: 10}}
    onClick={()=>{
      setIsCheckbxChecked(!isCheckbChecked)
    }}
    isChecked={isCheckbChecked}
    leftText={"CheckBox"}
/>
    </View>
  )
}

export default CustomCheckBox

const styles = StyleSheet.create({})