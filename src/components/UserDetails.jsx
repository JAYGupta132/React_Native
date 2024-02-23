import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UserDetails() {

  useEffect(()=>{
    fetchUser();
  },[])
  
    const fetchUser = async () => {
      try {
        const users = await AsyncStorage.getItem('Users');
        return users != null ? JSON.parse(users) : null;
      } catch (e) {
        console.log("Error:",e)
      }
  
  }

  return (
    <View>
      {/* <FlatList
        data={}
      /> */}
      <Text>UserDetails components</Text>
    </View>
  )
}