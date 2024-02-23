import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

export const ShowFormData = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [display, setDisplay] = useState(false)

  const showInputData = () => {
    setDisplay(true)
  }
  const hideInputData = () => {
    setDisplay(false)
    setEmail("")
    setName("")
    setPassword("")
  }
  return (
    <View>
      <Text style={styles.title}>ShowFormData</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder=" enter name"
          name="name"
          value={name}
          onChangeText={(text) => setName(text)}
        />                  
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder=" enter password"
          name="password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View>
        <TextInput style={styles.input} 
          placeholder=" enter email" 
          name = 'email'
          value={email}
          onChangeText={(text)=> setEmail(text) }
        />
      </View>
      <View style={styles.btn}>
        <Button title="submit" onPress={showInputData}/>
      </View>
      <View style={styles.btn}>
        <Button color='red' title="clear data" onPress={hideInputData} />
      </View>
      <View style= {styles.display}>{display?<View>
        <Text>Name: {name}</Text>
        <Text>Password: {password}</Text>
        <Text>Email: {email}</Text>
        </View>
        :null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000fff',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 0,
    margin: 5,
  },
  btn: {
    marginTop: 10,
  },
  display: {
    margin: 5
  }
});
