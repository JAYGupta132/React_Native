import React, { useState } from 'react'
import { View, Text ,StyleSheet, ActivityIndicator, Button} from 'react-native'

export default function Activity_Indicator() {
  const [show, setShow] = useState(false)
  const handleShow = () => {
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 3000);
    
  }

  return (
    <View  style={styles.main}>
      <ActivityIndicator size={'large'} color='black' animating= {show} />
      <Button title='Search' onPress={handleShow} />

    </View>
    
  )
}
styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})