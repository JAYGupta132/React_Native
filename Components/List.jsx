import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

function List() {
  const users = [
    {
      id : 1,
      name: 'user1'
    },
    {
      id : 2,
      name: 'user2'
    },
    {
      id : 3,
      name: 'user3'
    },
    {
      id : 4,
      name: 'user4'
    },
    {
      id : 5,
      name: 'user5'
    },
    {
        id : 6,
        name: 'user11'
      },
      {
        id : 7,
        name: 'user12'
      },
      {
        id : 8,
        name: 'user13'
      },
      {
        id : 9,
        name: 'user14'
      },
      {
        id : 10,
        name: 'user15'
      },
      {
        id : 11,
        name: 'user21'
      },
      {
        id : 12,
        name: 'user22'
      },
      {
        id : 13,
        name: 'user23'
      },
      {
        id : 14,
        name: 'user24'
      },
      {
        id : 15,
        name: 'user25'
      },
      {
        id : 21,
        name: 'user31'
      },
      {
        id : 22,
        name: 'user32'
      },
      {
        id : 23,
        name: 'user3'
      },
      {
        id : 24,
        name: 'user4'
      },
      {
        id : 25,
        name: 'user5'
      },
      {
        id : 31,
        name: 'user41'
      },
      {
        id : 32,
        name: 'user42'
      },
      {
        id : 33,
        name: 'user43'
      },
      {
        id : 34,
        name: 'user44'
      },
      {
        id : 35,
        name: 'user45'
      }
  ]
  return (
    <View>
    <Text style={styles.head}>List</Text>
    <FlatList 
    
      data={users}
      renderItem={({item})=><Text style={styles.listItem}>{item.name}</Text>}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  head: {
    textAlign: 'center',
    fontSize: 25,
    color: '#000',
    marginBottom: 20
  },
  listItem: {
    fontSize: 15,
    backgroundColor: 'blue',
    margin: 5,
    color: '#fff',
    padding: 5
  }
})


export default List