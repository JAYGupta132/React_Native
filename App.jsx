// import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/Home';
import Settings from './src/components/Settings';
import Explore from './src/components/Explore';
import StackNav from './src/navigation/BottomTabNav';
import TopTabNav from './src/navigation/TopTabNav';
import { DrawerExplore } from './src/navigation/DrawerExplore';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{headerShown: false}}>
    //     <Stack.Screen name='DrawerExplore' component={DrawerExplore} />
    //     {/* <Stack.Screen name='TopTab' component={TopTabNav} />
    //     <Stack.Screen name='Settings' component={Settings} />
    //     <Stack.Screen name='Explore' component={Explore} /> */}
    //   </Stack.Navigator>
    // </NavigationContainer>

   <DrawerExplore />
  );
}

const styles = StyleSheet.create({});
