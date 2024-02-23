import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { NotificationListener, requestUserPermission } from './src/notification_configuration'


export default function App() {
  useEffect(()=>{
    requestUserPermission()
    NotificationListener()
  },[])
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}