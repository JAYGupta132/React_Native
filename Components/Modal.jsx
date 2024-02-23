import React, { useState } from 'react'
import { View, Text, Modal, Button, StyleSheet } from 'react-native'

export default function Modal_View() {
  const [showModal, setShowModal] = useState(false)

  return (
    <View style={styles.main} >
    <Modal transparent= {true} style={styles.modal} visible={showModal}>
      <View style={styles.modalBody}>
      <View style= {styles.modalView}>
        <Text style={styles.text}>Welcome to React-Native</Text>
        <Button title='Hide Modal' onPress={()=>setShowModal(false)} />
      </View>
      </View>
    </Modal>
      <Button title='Show Modal' onPress={()=>setShowModal(true)} />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  modal: {
    backgroundColor: 'green',
    justifyContent: 'center'
  },
  modalBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 2
  },
  text: {
    fontSize: 20,
    marginBottom: 10
  }
})