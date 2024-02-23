import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  View,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import Contacts from 'react-native-contacts';

export default function AddContacts({navigation}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  const getPermission = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    })
      .then(res => {
        if (res == 'granted') {
          let newPerson = {
            emailAddresses: [
              {
                label: 'work',
                email: email,
              },
            ],
            phoneNumbers: [
              {
                label: 'mobile',
                number: number,
              },
            ],
            familyName: name,
          };

          Contacts.addContact(newPerson);
          navigation.goBack();
        }
      })
      .catch(error => {
        console.error('Permission error: ', error);
      });
  };

  const handleSave = () => {
    getPermission();
    setName('');
    setEmail('');
    setNumber('');
    
  }
  const onPress = () => navigation.goBack();
  return (
    <View style={{backgroundColor: '#000', flex: 1}}>
      <StatusBar translucent backgroundColor="black" />
      <View style={styles.main}>
        <Image style={styles.userImg} source={require('../images/user.png')} />
      </View>
      <View>
        <View style={styles.input}>
          <Image
            style={styles.icon}
            source={require('../images/userName.png')}
          />
          <TextInput
            style={styles.inputArea}
            value={name}
            onChangeText={text => setName(text)}
            placeholder="Name"
          />
        </View>
        <View style={styles.input}>
          <Image style={styles.icon} source={require('../images/phone.png')} />
          <TextInput
            style={styles.inputArea}
            value={number}
            onChangeText={text => setNumber(text)}
            placeholder="Phone"
          />
        </View>
        <View style={styles.input}>
          <Image style={styles.icon} source={require('../images/mail.png')} />
          <TextInput
            style={styles.inputArea}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="Email"
          />
        </View>
      </View>

      <View style={styles.parentBtn}>
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Cancel</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={handleSave}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userImg: {
    height: 80,
    width: 80,
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 70,
  },
  icon: {
    height: 23,
    width: 23,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    // elevation: 2,
    marginVertical: 10,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  inputArea: {
    width: 320,
    fontSize: 21,
    marginHorizontal: 15,
    color: '#000',
    // backgroundColor: '#000'
  },
  parentBtn: {
    // backgroundColor: '#fff',
    flexDirection: 'row',
    marginVertical: 90,
    marginHorizontal: 15,
    paddingVertical: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'blue',
    paddingHorizontal: 45,
    paddingVertical: 15,
    borderRadius: 25,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
  },
});
