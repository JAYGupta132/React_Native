import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OTPScreen from './OTPScreen';
import ImagePicker from 'react-native-image-crop-picker';

const Signup = () => {
  const [data, setData] = useState([]);
  const [filePAth, setFilePath] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleDOB = () => {
    setOpen(true);
  };

  const handleDateConfirm = selectedDate => {
    setOpen(false);
    setDate(selectedDate);
    const formattedDate = selectedDate.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    setDob(formattedDate);
  };

  const handleData = async () => {
    const newData = {
      name: name,
      dob: dob,
      email: email,
      password: password,
      cpassword: cpassword,
    };
    // setData([newData])

    console.log('newData received:', newData);
    // console.log('Data received:', data);

    try {
      const jsonValue = JSON.stringify(newData);
      console.log('jsonValue:', jsonValue);
      await AsyncStorage.setItem('Users', jsonValue);
      navigation.navigate('UserDetails');
    } catch (e) {
      console.log('Error:', e);
    }
  };

  const Image_Picker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      // multiple: true,
    }).then(image => {
      console.log(image.path);
      setFilePath(image.path);
    });
  };

  return (
    <ImageBackground
      style={styles.bg}
      source={require('../images/bg.jpg')}
      resizeMode="cover">
      <View style={{alignItems: 'center'}}>
        <ScrollView>
          <ImageBackground
            style={styles.main}
            imageStyle={{borderRadius: 25}}
            source={require('../images/loginbg.jpg')}>
            <View>
              <View style={styles.head}>
                <Text style={styles.headText}>Sign up</Text>
              </View>
              <View style={{alignItems: 'center'}}>
              <Image style={{height: 90, width: 90}} source={require('../images/user.png')}  />
                <View>
                  <TouchableOpacity onPress={() => Image_Picker()}>
                    <View style={styles.addImg}>
                    </View>
                  </TouchableOpacity>
                  {/* <Image
                    style={{width: 200, height: 200}}
                    source={{uri: filePAth}}
                  /> */}
                </View>
              </View>
              <View>
                <TextInput
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChangeText={text => setName(text)}
                  style={styles.inputArea}
                />
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{marginHorizontal: 19}}
                  onPress={handleDOB}>
                  <TextInput
                    placeholder="Date of birth"
                    name="dob"
                    value={dob}
                    onChangeText={text => setDob(text)}
                    style={{...styles.inputArea, marginHorizontal: 0}}
                  />
                  <Image
                    style={styles.calender}
                    source={require('../images/calendar.png')}
                  />
                </TouchableOpacity>
                <TextInput
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChangeText={text => setEmail(text)}
                  style={styles.inputArea}
                />
                <TextInput
                  secureTextEntry={true}
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChangeText={text => setPassword(text)}
                  style={styles.inputArea}
                />
                <TextInput
                  secureTextEntry={true}
                  name="cpassword"
                  value={cpassword}
                  onChangeText={text => setCPassword(text)}
                  placeholder="Confirm Password"
                  style={styles.inputArea}
                />
              </View>
            </View>
            <View>
              <TouchableOpacity style={styles.btn} onPress={() => handleData()}>
                <Text style={{fontSize: 20, color: '#fff'}}>Sign up</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.signout}>
              <Text style={{color: '#fff', fontSize: 15}}>
                Already a member?{' '}
              </Text>
              <TouchableOpacity onPress={() => handleLogin()}>
                <Text style={{color: 'blue', fontSize: 18, fontWeight: 'bold'}}>
                  {' '}
                  Log-in
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </ScrollView>
      </View>
      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        placeholder="select date"
        format="DD/MM/YYYY"
        minDate="01-01-1900"
        maxDate="01-01-2010"
        onConfirm={handleDateConfirm}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </ImageBackground>
  );
};

export default Signup;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    // marginVertical: 180,
    // marginHorizontal: 18,
    width: 370,
  },
  head: {
    // height: 150,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
    paddingVertical: 5,
  },
  headText: {
    fontSize: 35,
    color: '#fff',
    fontWeight: 'bold',
  },
  inputArea: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 15,
    fontSize: 17,
    paddingHorizontal: 15,
    borderRadius: 10,
    elevation: 15,
  },
  btn: {
    backgroundColor: 'grey',
    marginTop: 40,
    marginBottom: 15,

    marginHorizontal: 120,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
  signout: {
    // backgroundColor: '#fff',
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calender: {
    height: 20,
    width: 20,
    position: 'absolute',
    right: 20,
    top: 28,
    // backgroundColor: 'grey',
    marginLeft: 280,
    // marginVertical: 13,
    marginRight: 5,
  },
  addImg: { height:40, width: 40,backgroundColor: 'blue', borderRadius: 50}
});
