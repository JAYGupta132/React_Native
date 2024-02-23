import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopTabNav from '../navigation/TopTabNav'

export default function Settings({navigation}) {
  return (
    <View>
    
    <Text>Settings screen</Text>
      <Text style={{marginTop: 20, marginBottom: 5, alignSelf: 'center'}}>
        for go to Home screen click below button
      </Text>
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Go to Home screen"
      />
      <Text style={{marginTop: 20, marginBottom: 5, alignSelf: 'center'}}>
        for go to explore screen click below button
      </Text>
      <Button
        onPress={() => navigation.navigate('Explore')}
        title="Go to Explore screen"
      />
    </View>
  )
}

const styles = StyleSheet.create({})