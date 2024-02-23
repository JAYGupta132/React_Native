import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Home({navigation}) {
  return (
    <View>
    <Text>Home screen</Text>
      <Text style={{marginTop: 20, marginBottom: 5, alignSelf: 'center'}}>
        for go to setting screen click below button
      </Text>
      <Button
        onPress={() => navigation.navigate('Settings')}
        title="Go to Setting screen"
      />
      <Text style={{marginTop: 20, marginBottom: 5, alignSelf: 'center'}}>
        for go to explore screen click below button
      </Text>
      <Button
        onPress={() => navigation.navigate('Explore')}
        title="Go to Explore screen"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
