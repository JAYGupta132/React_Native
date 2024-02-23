import React from 'react'
import { FlatList, StyleSheet, Text, View} from 'react-native'
import { UserData } from './UserData'

export default function Component_FlatList() {
  const users = [
    {
      name: 'jay',
      email: 'jay@gmail.com'
    },
    {
      name: 'jay1',
      email: 'jay1@gmail.com'
    },
    {
      name: 'jay2',
      email: 'jay2@gmail.com'
    },
    {
      name: 'jay3',
      email: 'jay3@gmail.com'
    },
    {
      name: 'jay4',
      email: 'jay4@gmail.com'
    },
    {
      name: 'jay5',
      email: 'jay5@gmail.com'
    },
  ]
  return (
    <View>
      <Text style={styles.head}>Component_FlatList render</Text>
      <FlatList 
        data={users}
        renderItem={({item})=><UserData item={item}/>
        }
      />
    </View>
  )
}


const styles = StyleSheet.create({
  head: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
    marginBottom: 10
  }
})