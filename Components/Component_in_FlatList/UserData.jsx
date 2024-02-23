import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
export const UserData =(props) =>{
  const item = props.item;
  return(
   
    <View style={styles.box}>
    <Text style={styles.item}>{item.name}</Text>
    <Text style={styles.item}>{item.email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    fontSize: 20,
    color: 'black',
    margin: 5,
    flex: 1,
    textAlign:'center',
    padding: 2
  },
  box: {
    flexDirection: 'row',
    borderWidth: 1,
    marginTop: 5
  }
})