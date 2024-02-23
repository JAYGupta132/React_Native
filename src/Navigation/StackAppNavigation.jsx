import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import ContactApp from '../Screens/ContactApp';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddContacts from '../Screens/AddContacts';
import ContactDetails from '../Screens/ContactDetails';

const Stack = createNativeStackNavigator();

export default function StackAppNavigation() {
  return (
    <NavigationContainer>
    
      <Stack.Navigator>
        <Stack.Screen
          name="ContactApp"
          component={ContactApp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddContacts"
          component={AddContacts}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ContactDetails"
          component={ContactDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
