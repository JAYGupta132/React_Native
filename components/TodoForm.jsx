import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import COLORS from './colors/colors';

const TodoForm = ({isEditing,eIndex, editTitle, editDescription}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (isEditing) {
      setTitle(editTitle);
      setDescription(editDescription);
    }
  }, [isEditing, editTitle,editDescription]);

  let data = {title, description};
  const handleAppTodo = async () => {
    if (isEditing) {
      console.log("qq")
      await axios.patch(`http://10.0.2.2:3000/data/${eIndex}`, {
        title,
        description,
      });
    } else {
      try {
        await axios.post('http://10.0.2.2:3000/data', data).then(response => {
          console.log('Response:', response.data);
        });
      } catch (error) {
        console.log('Error while Adding data: ', error);
      }
    }
    setTitle('');
    setDescription('');
  };

  return (
    <View style={styles.main}>
      <View style={styles.componentOne}>
        <Text style={styles.title}>
          {' '}
          {isEditing ? 'Edit Todo' : 'Add Todo'}
        </Text>
      </View>
      <View style={styles.componentTwo}>
        <Text style={{fontSize: 20, marginTop: 10}}>Title</Text>
        <TextInput
          style={styles.inputTitle}
          placeholder="enter title"
          value={title}
          onChangeText={e => setTitle(e)}
        />
        <Text style={{fontSize: 20, marginTop: 10}}>Description</Text>
        <TextInput
          multiline={true}
          numberOfLines={10}
          style={{...styles.inputTitle, height: 150, textAlignVertical: 'top'}}
          placeholder="enter description"
          value={description}
          onChangeText={e => setDescription(e)}
        />
      </View>
      <View>
        <TouchableOpacity onPress={handleAppTodo} style={styles.addBtn}>
          <Text style={{fontSize: 20, color: '#fff'}}>
            {' '}
            {isEditing ? 'Edit' : 'Add'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    // <View>
    //   <Text>home</Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#fff',
    backgroundColor: COLORS.primary,
    paddingTop: 10,
    marginTop: 0,
    paddingHorizontal: 25,
    paddingBottom: 7,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  main: {
    marginVertical: 0,
  },
  componentOne: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputTitle: {
    // borderWidth: 1,
    padding: 5,
    marginVertical: 10,
    fontSize: 18,
    borderRadius: 5,
    backgroundColor: '#fff',
    elevation: 10,
  },
  componentTwo: {
    marginVertical: 40,
    marginHorizontal: 10,
  },
  addBtn: {
    backgroundColor: 'blue',
    marginHorizontal: 130,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 30
  },
});
export default TodoForm;
