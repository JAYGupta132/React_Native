import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function AboutScreen() {
  const navigation = useNavigation()
  
  const handleScreen = () => {
    navigation.navigate("Contact")
  }
  return (
    <View style={{flex: 1  ,alignItems: 'center', justifyContent: 'center'}}>
      <Text>About Screen</Text>
      <TouchableOpacity style={styles.btn} onPress={()=>handleScreen()} >
        <Text style={{color: '#fff', fontSize: 18}}>go to Contact Screen</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 20
  }
})