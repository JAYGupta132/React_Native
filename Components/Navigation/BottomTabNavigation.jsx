import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export default function BottomTabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="LogIn" component={LogIn} />
        <Tab.Screen name="SignUp" component={SignUp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const LogIn = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Hello Login</Text>
    </View>
  );
};

const SignUp = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Hello SignUp</Text>
    </View>
  );
};


const styles= StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    margin: 40,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20
  },
  
})