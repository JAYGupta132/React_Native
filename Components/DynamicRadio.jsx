import React,{useState} from 'react'
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native'

export default function DynamicRadio() {
  const [clickedRadio, setClickedRadio] = useState(1);
  const skills = [
    {
      id: 1,
      name: "JAVA"
    },
    {
      id: 2,
      name: "RUBY"
    },
    {
      id: 3,
      name: "ROR"
    },
    {
      id: 4,
      name: "NODE"
    },
    {
      id: 5,
      name: "PYTHON"
    },
    {
      id: 6,
      name: "SWIFT"
    },
    {
      id: 7,
      name: "FLUTTER"
    }
  ]

  return (
    <View  style={styles.main}>
       {
        skills.map((item, index)=>
          <View style={styles.radioWrapper}>
        <TouchableOpacity
        key={index}
          onPress={() => {
            setClickedRadio(item.id);
          }}>
          <View>
            <View style={styles.radio}>
              {clickedRadio==item.id? <View style={styles.innerRadio}></View> : null}
            </View>
          </View>
        </TouchableOpacity>
        <Text style={styles.radioText}>{item.name}</Text>
      </View>
        )
       }
    </View>
  )
}


styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    fontSize: 20,
    marginLeft: 5,
    color: 'black'
  },
  radio: {
    height: 30,
    width: 30,
    borderWidth: 1,
    borderColor: 'skyblue',
    borderRadius: 15,
  },
  radioWrapper: {
    flexDirection: 'row',
    marginTop: 15,
  },
  innerRadio: {
    backgroundColor: 'skyblue',
    height: 22,
    width: 22,
    margin: 3,
    borderRadius: 10,
  },
})