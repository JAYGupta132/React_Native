import { useState } from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'


export const Login = (props) => {
  const [name, setName] = useState('')

  return(
    <View style={styles.main}>
      <Text style={styles.text}>LogIn Component</Text>
      <TextInput placeholder='type name and send as a props to Home.' 
        onChangeText={(text)=>setName(text)} 
        style={styles.input}
      />
      <Button title='home'  onPress={()=> props.navigation.navigate("Home",{name})}/>
    </View>
  )
}

const styles= StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    margin: 40,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    padding: 0
  }
})


