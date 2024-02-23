import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


export default function StackNavigation01() {
  const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name= 'Home' component={Home} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}


const Home = () => {
  return(
    <View style={styles.main}>
      <Text style={styles.text}>This is Home Container...</Text>
    </View>
  )
}

const Login = (props) => {
  return(
    <View style={styles.main}>
      <Text style={styles.text}>LogIn Component</Text>
      <Button title='home'  onPress={()=> props.navigation.navigate("Home")}/>
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
  }
})