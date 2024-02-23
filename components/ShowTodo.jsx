import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import COLORS from './colors/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import TodoForm from './TodoForm';
import EditModal from './EditModal';

const ShowTodo = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [eIndex, setEIndex] = useState(-1)

  const onPress = () => {
    navigation.goBack();
  };

  const handleEditTodo = async (todoId) => {

    const response = await axios.get('http://10.0.2.2:3000/data/' + todoId);

    setEIndex(todoId)
    setEditTitle(response.data.title);
    setEditDescription(response.data.description);
    setIsEditing(true);
  };

  const fetchData = async () => {
    const url = 'http://10.0.2.2:3000/data';
    try {
      const response = await axios.get(url);
      const newData = response.data;
      setData(newData);
    } catch (error) {
      console.log('Error: ', error);
    }
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });
    return unsubscribe;
  }, [navigation]);


  const handleDeleteTodo = async todoId => {
    try {
      await axios.delete(`http://10.0.2.2:3000/data/${todoId}`);

      await fetchData();
    } catch (error) {
      console.log('Error deleting todo: ', error);
    }
  };
  const handleDoneTodo = async todoId => {
    try {
      await axios.patch(`http://10.0.2.2:3000/data/${todoId}`, {done: true});

      await fetchData();
    } catch (error) {
      console.log('Error marking todo as done: ', error);
    }
  };

  return (
    <View>
      <View>
            <View style={styles.mainComponent1}>
              <Text style={styles.title}>Todo List</Text>
            </View>
        <ScrollView style={{backgroundColor: '#fff', height: 730}}>
          <View style={styles.mainComponent}>

            {data.map((item, index) => (
              <View key={index} style={styles.components}>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: COLORS.primary,
                    marginHorizontal: 15,
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                    color: COLORS.secondary,
                    marginHorizontal: 10,
                  }}>
                  {item.description}
                </Text>
                <View style={styles.operations}>
                  <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}>
                    <MaterialIcons
                      name="delete"
                      size={22}
                      color="red"
                      style={{marginHorizontal: 10, marginVertical: 5}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleEditTodo(item.id)}>
                    <MaterialIcons
                      name="edit-note"
                      size={22}
                      color="blue"
                      style={{marginHorizontal: 10, marginVertical: 5}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity  onPress={() => handleDoneTodo(item.id)}>
                    <AntDesign
                      name="checkcircle"
                      size={22}
                      color={item.done ? 'green' : 'gray'}
                      style={{marginHorizontal: 10, marginVertical: 5}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={styles.addNew}>
          <MaterialIcons name="add" onPress={onPress} color="white" size={38} />
        </View>
        {isEditing ? <EditModal eIndex={eIndex} editTitle={editTitle} editDescription={editDescription} isEditing={isEditing}  setIsEditing={setIsEditing} /> : null}
      </View>
      <TodoForm />
    </View>
  );
};

export default ShowTodo;

const styles = StyleSheet.create({
  mainComponent: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 150,
  }, 
  mainComponent1: {
    // flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    // marginBottom: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#fff',
    backgroundColor: COLORS.primary,
    paddingTop: 10,
    marginTop: 0,
    paddingHorizontal: 31,
    paddingBottom: 7,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  components: {
    height: 'auto',
    width: 350,
    backgroundColor: '#fff',
    elevation: 15,
    marginTop: 50,
    borderRadius: 20,
    alignItems: 'center',
  },
  operations: {
    flexDirection: 'row',
  },
  addNew: {
    height: 70,
    width: 70,
    backgroundColor: COLORS.primary,
    position: 'absolute',
    bottom: 120,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 290,
    opacity: 0.8,
  },
});
