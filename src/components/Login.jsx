import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export default function Login() {
  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('Google login userInfo', userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('Error:', error);
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Error:', error);

        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Error:', error);

        // play services not available or outdated
      } else {
        // some other error happened
        console.log('Error:', error);
      }
    }
  };

  return (
    <View>
    {/* <TouchableOpacity style={{padding: 10, backgroundColor: 'red', alignItems: 'center', marginVertical: 25}}>
      <Text style={{color: "#fff"}}>Google Login</Text>
    </TouchableOpacity> */}
      <Button onPress={googleLogin} title="login" />
    </View>
  );
}
