import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

export default function Pressable_Event() {
  return (
    <View style={styles.main}>
    <Pressable 
      // onPress={()=>{console.warn("on press")}}
      // onLongPress={()=>{console.warn("on Long press")}}
      onPressIn={()=>{console.warn("on press In")}}
      onPressOut={()=>{console.warn("on press Out")}}
    > 
      <Text style={styles.btn}>Pressable</Text>
    </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    fontSize: 25,
    textAlign: 'center',
    backgroundColor: 'blue',
    padding: 10,
    color: '#fff',
    borderRadius: 20,
    elevation: 4,
    shadowColor: 'black',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    margin: 40,
    
  }
})