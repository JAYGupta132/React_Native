import {
  FlatList,
  Image,
  PermissionsAndroid,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Contacts from 'react-native-contacts';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';

export default function ContactApp({navigation}) {
  const [contacts, setContacts] = useState([]);
  const isFocused = useIsFocused();
  const [isSearchVisible, setSearchVisible] = useState(false)

  useEffect(() => {
    getPermission();
  }, [isFocused]);

  const getPermission = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    })
      .then(res => {
        console.log('Permission: ', res);
        Contacts.getAll()
          .then(con => {
            // work with contacts
            console.log('got contacts successfully...');
            setContacts(con);
          })
          .catch(e => {
            console.log(e);
          });
      })
      .catch(error => {
        console.error('Permission error: ', error);
      });
  };
  const handleSearch = () => {
    setSearchVisible(true)
  }
  const closeSearch = () => {
    setSearchVisible(false)
    getPermission()
  }

  const handleSearchText = text => {
    let data = contacts    //   problem accuring.....................
    
    let searchData = data.filter(item => {
      // console.log("data:",item)
      return item.displayName.toLowerCase().includes(text.toLowerCase());
    })
    setContacts(searchData)
  }

  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <StatusBar hidden />
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          marginHorizontal: 20,
          marginBottom: 20,
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <View>
          <Text style={{color: '#000', fontWeight: 'bold', fontSize: 30}}>
            Contacts
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('AddContacts')}>
            <Image
              style={{height: 20, width: 20}}
              source={require('../images/add.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handleSearch()}>
            <Image
              style={{height: 20, width: 20, marginLeft: 20}}
              source={require('../images/search.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      {isSearchVisible?<View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: '#fff',
          borderRadius: 40,
          marginHorizontal: 15,
          borderBottomWidth: 1,
          
        }}>
        <Image
          style={{height: 20, width: 20, marginLeft: 20, tintColor: '#fff'}}
          source={require('../images/search.png')}
        />
        <TextInput
          onChangeText={text=>handleSearchText(text)}
          style={{color: '#fff', marginHorizontal: 10, fontSize: 20, width: 265}}
          placeholder="Search Contact"
          placeholderTextColor={'#fff'}
        />
        <TouchableOpacity onPress={()=>closeSearch()} activeOpacity={0.7}>
          <Text style={{color: '#fff', fontWeight: '900', fontSize: 22}}>X</Text>
        </TouchableOpacity>
      </View>:null}
      <FlatList
        data={contacts}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                navigation.navigate('ContactDetails', {data: item});
              }}
              style={{
                width: '90%',
                height: 70,
                alignSelf: 'center',
                borderColor: '#fff',
                borderWidth: 0.7,
                borderRadius: 10,
                marginTop: 12,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../images/user.png')}
                  style={{
                    width: 40,
                    height: 40,
                    marginLeft: 15,
                    borderRadius: 20,
                  }}
                />
                <View style={{padding: 10, overflow: 'hidden',}}>
                  <Text style={{color: '#fff', fontSize: 20, overflow: 'hidden', width:200, height:30}}>
                    {item.displayName}
                  </Text>
                  <Text style={{color: '#fff', fontSize: 15, marginTop: 4}}>
                    {item.phoneNumbers[0].number}
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', paddingRight: 15}}>
                <TouchableOpacity>
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: 20,
                      tintColor: '#fff',
                    }}
                    source={require('../images/message.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(`tel:${item.phoneNumbers[0].number}`)
                  }>
                  <Image
                    style={{width: 20, height: 20, tintColor: '#fff'}}
                    source={require('../images/call.png')}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
