import React from 'react'
import { View, Text, SectionList, StyleSheet } from 'react-native'

export default function Section_List() {

  const student =[  
    {
      id: 1,
      name: 'Vikram',
      data: ['react  js','node js','Angular','Ruby']
    },
    {
      id: 2,
      name: 'Jay prakash gupta',
      data: ['Java','node js','Python','Ruby']
    },
    {
      id: 3,
      name: 'Vivek',
      data: ['Django','Flask','Angular','PHP']
    },
    {
      id: 4,
      name: 'Yogesh',
      data: ['.Net','C#','Angular','C++']
    },
    {
      id: 5,
      name: 'Lavkush gupta',
      data: ['C','GO','Scala','ROR']
    }
  ]
  return (
    <View>
    <Text style={styles.head}>Section List Example</Text>
      <SectionList
        sections={student}
        renderItem={({item})=><Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section:{name}})=><Text style={styles.header}>{name}</Text>}
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
  },
  item: {
    marginLeft: 20,
    color: 'black'
  },
  header: {
    fontSize: 15,
    color: 'red'
  }
})