import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


export default function TopTabNavigation() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="LogIn" component={LogIn} />
        <Tab.Screen name="SignUp" component={SignUp} />
        <Tab.Screen name="Other" component={Other} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const LogIn = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Login Components...</Text>
    </View>
  );
};

const SignUp = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>SignUp Components...</Text>
    </View>
  );
};


const Other = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Other Components...</Text>
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