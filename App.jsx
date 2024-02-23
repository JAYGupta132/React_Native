import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  useIsFocused
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [skill, setSkill] = useState('');
  const [data, setData] = useState([]);
  const isFocused = useIsFocused()

  const saveData = async (name, age, skill) => {
    console.log('function invoked...');
    const response = await axios.post('http://10.0.2.2:3000/users', {
      name,
      age,
      skill,
    });
    console.log('Result: ', response.data);
    setName('');
    setAge('');
    setSkill('');
  };

  const showData = async () => {
    const response = await axios.get('http://10.0.2.2:3000/users');
    const res = response.data;
    setData(res);
  };
  useEffect(()=>{showData()},[isFocused])

  return (
    <View>
      <View style={{backgroundColor: 'grey', alignItems: 'center'}}>
        <Text style={{color: '#FFF', fontSize: 30}}>Api Data</Text>
      </View>
      <View>
        <TextInput
          placeholder="enter name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          placeholder="enter age"
          value={age}
          onChangeText={text => setAge(text)}
        />
        <TextInput
          placeholder="enter skill"
          value={skill}
          onChangeText={text => setSkill(text)}
        />
      </View>
      <View>
        <Button title="save data" onPress={() => saveData(name, age, skill)} />
      </View>
      <View>
        <Button title="Show data" onPress={showData} />
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style= {{flex: 3, backgroundColor: 'white', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-evenly'}}>
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
            <Text>{item.skill}</Text>
            <Button title='D' />
            <Button title='U' />
          </View>
        )}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
