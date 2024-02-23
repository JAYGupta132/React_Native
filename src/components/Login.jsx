import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  
  const handleSignup = () => {
    navigation.navigate("Signup")
  }
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={styles.bg}
        source={require('../images/bg.jpg')}
        resizeMode="cover">
        <View>
          <ImageBackground
            style={styles.main}
            imageStyle={{borderRadius: 25}}
            source={require('../images/loginbg.jpg')}>
            <View>
              <View style={styles.head}>
                <Text style={styles.headText}>Login</Text>
              </View>
              <View>
                <TextInput
                  placeholder="Email"
                  style={styles.inputArea}
                />
                <TextInput
                secureTextEntry={true}
                  placeholder="Password"
                  style={styles.inputArea}
                />
              </View>
            </View>
            <View>
              <TouchableOpacity style={styles.btn}>
                <Text style={{fontSize: 20, color: '#fff'}}>Login</Text>
              </TouchableOpacity>
            </View>
              <View style={styles.signout}>
                <Text style={{color: '#fff', fontSize: 15}}>
                  Not a member?{' '}
                </Text>
                <TouchableOpacity onPress={handleSignup}>
                  <Text
                    style={{color: 'blue', fontSize: 18, fontWeight: 'bold'}}>
                    {' '}
                    Sign-up
                  </Text>
                </TouchableOpacity>
              </View>
        
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  bg: {
    // height: 900,

    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  main: {
    // marginVertical: 180,
    // marginHorizontal: 18,
    width: 370
  },
  head: {
    // height: 150,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
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
});
