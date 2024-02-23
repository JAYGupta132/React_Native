import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import SearchResults from './SearchResults';
import {useIsFocused} from '@react-navigation/native';

export default function Employees({navigation}) {
  const [employees, setEmployees] = useState([]);
  const [input, setInput] = useState('');
  const intervalRef = useRef();
  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get('http://192.168.55.44:8000/employees');
        setEmployees(response.data);
        // console.log('Employee response Data: ', response.data);
      } catch (error) {
        console.log('Error while fetching Employee Data', error);
      }
    };
    fetchEmployeeData();
  }, [isFocused]);

  return (
    <View style={{flex: 1, backgroundColor: '#fff', }}>
      <View
        style={{
          // backgroundColor: '#9e9e9e9e',
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 10,
          marginVertical: 5,
        }}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.goBack()}>
          <Image
            style={{height: 20, width: 20}}
            source={require('../images/backArrow.png')}
          />
        </TouchableOpacity>
        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 15,
            // elevation: 1,
            gap: 10,
            // backgroundColor: '#fff',
            height: 40,
            borderRadius: 4,
            flex: 1,
          }}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => intervalRef.current.focus()}>
            <Image
              style={{height: 20, width: 20}}
              source={require('../images/search.png')}
            />
          </TouchableOpacity>
          <TextInput
            value={input}
            onChangeText={text => setInput(text)}
            placeholder="Search"
            style={{flex: 1}}
            ref={intervalRef}
          />
          {employees.length > 0 && (
            <View>
              <Pressable onPress={() => navigation.navigate('AddDetails')}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#0072b1'}}
                  source={require('../images/add.png')}
                />
              </Pressable>
            </View>
          )}
        </Pressable>
      </View>
      {employees.length > 0 ? (
        <SearchResults data={employees} input={input} setInput={setInput} />
      ) : (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>No Data</Text>
          <Text>Press on the plus button and add your employee</Text>
          <Pressable onPress={() => navigation.navigate('AddDetails')}>
            <Image
              style={{
                height: 24,
                width: 24,
                tintColor: '#0072b1',
                marginTop: 30,
              }}
              source={require('../images/add.png')}
            />
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
