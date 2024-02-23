import React, { useState } from 'react'
import { Text, TextInput, View, StyleSheet, Button } from 'react-native'

const HandleInput = () => {
  const [name, setName] = useState("")

  return (
    <View>
    
    <Text style={styles.title}>Registration Form</Text>
    <TextInput style={styles.input} 
      placeholder='enter your name'
      value={name}
      onChangeText={(e)=>setName(e)}
    />
    <Text>Name: {name}</Text>
    <Button title='clear name' onPress={()=>{setName("")}}/>
    </View>
  )
};

const styles =  StyleSheet.create({
  title : {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    marginBottom: 15
  },
  input:  {
    padding: 0,
    borderWidth: 1,
    borderColor: 'green',
    margin: 2
  }
})

export default  HandleInput;