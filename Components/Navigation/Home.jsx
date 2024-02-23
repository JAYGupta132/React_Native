import { View, Text, StyleSheet } from "react-native"

export const Home = (props) => {
  const {name} = props.route.params
  
  return(
    <View style={styles.main}>
      <Text style={styles.text}>This is Home Container...</Text>
      <Text style={styles.text}>Name: {name}</Text>
    </View>
  )
}


const styles= StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    margin: 40,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20
  }
})