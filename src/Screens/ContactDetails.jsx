import {
  Alert,
  Image,
  Linking,
  PermissionsAndroid,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import Contacts from 'react-native-contacts';

export default function ContactDetails({navigation}) {
  const route = useRoute();
  const onPress = () => {
    navigation.goBack();
  };

  console.log('data: ', route.params.data);

  const getDelPermission = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    })
      .then(res => {
        if (res == 'granted') {
          Contacts.deleteContact(route.params.data)
            .then(recordId => {
              console.log('Yes, Contact gone to the Bin...');
            })
            .catch(error => {
              console.log('OH NO! please try again...');
            });
          navigation.goBack();
        }
      })
      .catch(error => {
        console.error('Permission error: ', error);
      });
  };

  const handleDelete = () => {
    Alert.alert(
      'Confirm Deletion',
      'Think again to remove this Contact?',
      [
        {
          text: 'Cancel',
        },
        {
          text: 'Proceed',
          onPress: () => {
            getDelPermission();
          },
        },
      ],
    );
  };

  const getEditPermission = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    })
      .then(res => {
        if (res == 'granted') {
          Contacts.deleteContact(route.params.data)
            .then(recordId => {
              console.log('Yes, Contact gone to the Bin...');
            })
            .catch(error => {
              console.log('OH NO! please try again...');
            });
          navigation.goBack();
        }
      })
      .catch(error => {
        console.error('Permission error: ', error);
      });
  };

  const handleEdit = () => {
    getEditPermission();
  }

  return (
    <View style={{backgroundColor: '#000', flex: 1}}>
      <StatusBar
        translucent
        backgroundColor="black"
        barStyle={'light-content'}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
          marginVertical: 20,
        }}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.backBtn}
          onPress={onPress}>
          <Image
            style={{
              tintColor: '#fff',
              height: 22,
              width: 22,
            }}
            source={require('../images/back.png')}
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => handleEdit()}>
            <Image
              style={{
                tintColor: '#fff',
                height: 22,
                width: 22,
                marginRight: 10,
              }}
              source={require('../images/edit.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} onPress={() => handleDelete()}>
            <Image
              style={{height: 22, width: 22, marginLeft: 10}}
              source={require('../images/delete.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.main}>
        <View>
          <Image
            style={styles.userImg}
            source={require('../images/user.png')}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.dataItem}>{route.params.data.displayName}</Text>
          <Text style={{color: '#fff', fontSize: 20}}>
            {route.params.data.phoneNumbers[0].number}
          </Text>
          <TouchableOpacity activeOpacity={0.7} style={styles.callingSim}>
            <Text style={{fontSize: 18, color: '#fff'}}>
              Call with Default: SIM 2
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 10,
              width: 250,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={()=>Linking.openURL(`tel:${route.params.data.phoneNumbers[0].number}`)}
              activeOpacity={0.7}
              style={{
                backgroundColor: 'rgb(80, 167, 61)',
                height: 45,
                width: 45,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{tintColor: '#fff', height: 25, width: 25}}
                source={require('../images/call.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <Image
                style={{height: 45, width: 45}}
                source={require('../images/chat.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                backgroundColor: 'rgb(80, 167, 61)',
                height: 45,
                width: 45,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{tintColor: '#fff', height: 25, width: 25}}
                source={require('../images/zoom.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          flexDirection: 'row',
          backgroundColor: '#202020',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 25,
          borderRadius: 25,
          paddingVertical: 10,
        }}>
        <Text style={{color: '#fff', fontSize: 20}}>WhatsApp</Text>
        <Image
          style={{height: 35, width: 35}}
          source={require('../images/whatsapp.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          width: 250,
          flexDirection: 'row',
          backgroundColor: '#202020',
          justifyContent: 'center',
          alignSelf: 'center',
          paddingHorizontal: 25,
          borderRadius: 25,
          paddingVertical: 10,
          marginVertical: 35,
        }}>
        <Text style={{color: '#fff', fontSize: 20}}>History</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          width: 250,
          flexDirection: 'row',
          backgroundColor: '#202020',
          justifyContent: 'center',
          alignSelf: 'center',
          paddingHorizontal: 25,
          borderRadius: 25,
          paddingVertical: 10,
        }}>
        <Text style={{color: '#fff', fontSize: 20}}>Storage Locations</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  backBtn: {
    height: 25,
    width: 25,
  },
  userImg: {
    height: 90,
    width: 90,
    // position: 'absolute',
    top: -45,
  },
  main: {
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
    marginBottom: 35,
    backgroundColor: '#202020',
    borderRadius: 25,
    // opacity: 0.2,
  },
  details: {
    top: -20,
    // marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataItem: {
    marginBottom: 10,
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    // marginVertical: 4,
  },
  callingSim: {
    backgroundColor: '#383838',
    paddingVertical: 7,
    borderRadius: 50,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});
