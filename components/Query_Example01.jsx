import {View, Text, FlatList, Button, TextInput} from 'react-native';
import React, {useState} from 'react';
import {useMutation, useQuery, useQueryClient} from 'react-query';
import axios from 'axios';

export default function Query_Example01() {
  const [title, setTitle] = useState('');
  const {isLoading, data, error} = useQuery(
    'todo',
    async () =>
      await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3').then(res =>
        res.json(),
        console.log("new data arrived...")
      ),
  );

  const addNewData =  newTodo => {
    return axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
  }

  const queryClient = useQueryClient();
  // console.log('DATA: ', data);
  const mutation = useMutation(
   addNewData,
    {
      onSuccess: () => {
        console.log('success...');
        queryClient.invalidateQueries('todo');
      },
    },
  );

  if (isLoading) return <Text>Loading...</Text>;

  if (error) return 'An error has occurred: ' + error.message;

  const hadleUpdate = id => {
    console.log('ID:');
  };

  return (
    <View>
      <Text>Query_Example01</Text>
      <View>
        <TextInput
          value={title}
          onChangeText={text => setTitle(text)}
          placeholder="Title"
          style={{backgroundColor: '#fff', elevation: 10, marginVertical: 15}}
        />
        <View style={{}}>
          <Button
            title="create"
            onPress={() => {
              mutation.mutate({title: title});
            }}
          />
          <Button title="update" />
        </View>
      </View>
      <FlatList
        style={{marginBottom: 500}}
        data={data}
        renderItem={({item}) => (
          <View style={{marginVertical: 10}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>Id: </Text>
              <Text>{item.id}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>Title: </Text>
              <Text>{item.title}</Text>
            </View>
            <Button onPress={() => hadleUpdate(item.id)} title="update" />
          </View>
        )}
      />
    </View>
  );
}
