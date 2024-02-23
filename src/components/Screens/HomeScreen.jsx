import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()

  const navigateToAboutScreen = () => {
    navigation.navigate('About')
  }


  return (
    <View style={{flex: 1  ,alignItems: 'center', justifyContent: 'center'}}>
      <Text>HomeScreen</Text>
      <TouchableOpacity style={styles.btn} onPress={()=>navigateToAboutScreen()} >
        <Text style={{color: '#fff', fontSize: 18}}>go to AboutScreen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

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