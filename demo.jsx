import {
  ActivityIndicator,
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState('');
  const [newItem, setNewItem] = useState({title: '', body: ''});
  const [selectedItemId, setSelectedItemId] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    // setIsLoading(true)
    console.log('fetch function called...');
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?page=${page}&_limit=4`,
      );
      // setData(response.data);
      setData(prevData => [...prevData, ...response.data]);
    } catch (error) {
      console.log("Error:",error)
    } 
  };

  const handleLoadMore = () => {
    // Increment the page value and fetch more data
    setPage(page + 1);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async id => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const newData = data.filter(item => item.id !== id);
      setData(newData);
    } catch (error) {}
  };
  const handleCreate = async () => {
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        newItem,
      );
      const createItem = response.data;
      setData([...data, createItem]);
      setNewItem({title: '', body: ''});
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${selectedItemId}`,
        newItem,
      );
      const updatedItem = response.data;

      const updatedData = data.map(item =>
        item.id === selectedItemId ? updatedItem : item,
      );

      setData(updatedData);

      setNewItem({title: '', body: ''});
      setSelectedItemId(false)
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const selectItemForUpdate = id => {
    const selectedItem = data.find(item => item.id === id);
    setSelectedItemId(id);
    if (selectedItem) {
      setNewItem({title: selectedItem.title, body: selectedItem.body});
    }
  };
  const handleReset = () => {
    setSelectedItemId(false)
    setNewItem({title: '', body: ''})
  }

  return (
    <View>
      <Text
        style={{
          fontSize: 25,
          alignSelf: 'center',
          fontWeight: 'bold',
          borderBottomWidth: 2,
        }}>
        App
      </Text>

      <View style={{marginVertical: 10}}>
        <Text style={{fontWeight: 'bold', color: '#000', fontSize: 25}}>
          {selectedItemId ? 'updated item' : 'create item'}
        </Text>
        <Text>Title: </Text>
        <TextInput
          placeholder="Enter title"
          style={{backgroundColor: '#fff', elevation: 10}}
          value={newItem.title}
          onChangeText={text => setNewItem({...newItem, title: text})}
        />
        <Text>Body: </Text>
        <TextInput
          placeholder="Enter Body"
          style={{backgroundColor: '#fff', elevation: 10, marginBottom: 10}}
          value={newItem.body}
          onChangeText={text => setNewItem({...newItem, body: text})}
        />
        {selectedItemId ? (
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>

          <Button title="update" onPress={handleUpdate} />
          <Button title="Reset" onPress={handleReset} />
          </View>
        ) : (
          <Button title="Create" onPress={handleCreate} />
        )}
      </View>
      <FlatList
        style={{marginBottom: 300}}
        data={data}
        renderItem={({item}) => (
          
          <ScrollView
          key={`item-${item.userId}-${item.id}`} 
            style={{
              backgroundColor: '#fff',
              marginVertical: 20,
              elevation: 10,
              padding: 5,
              // flex: 1
            }}>
            {console.log(data.map(item => item.id))
}
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold', color: '#000'}}>Title: </Text>
              <Text>{item.title}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold', color: '#000'}}>Body: </Text>
              <Text>{item.body}</Text>
            </View>
            <TouchableOpacity
              onPress={() => selectItemForUpdate(item.id)}
              style={{
                backgroundColor: 'blue',
                alignItems: 'center',
                marginHorizontal: 150,
              }}>
              <Text style={{color: '#fff'}}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleDelete(item.id)}
              style={{
                backgroundColor: 'red',
                alignItems: 'center',
                marginHorizontal: 150,
              }}>
              <Text style={{color: '#fff'}}>Delete</Text>
            </TouchableOpacity>
          </ScrollView>
        )}
        keyExtractor={(item) => `item-${item.userId}-${item.id}`}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0}
        ListFooterComponent={() => (
          isLoading && <ActivityIndicator size="large" color="#0000ff" />
        )}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});