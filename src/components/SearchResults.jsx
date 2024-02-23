import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function SearchResults({data, input, setInput}) {
  const Capitalize= (str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
    }
  return (
    <View style={{padding: 10}}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          if (item?.employeeName.toLowerCase().includes(input.toLowerCase())) {
            return (
              <View style={{marginVertical: 10, gap: 10, flexDirection: 'row'}}>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 8,
                    padding: 10,
                    backgroundColor: '#4b6cb7',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: '#fff', fontSize: 16}}>
                    {item?.employeeName?.charAt(0).toUpperCase()}
                  </Text>
                </View>
                <View>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>
                    {Capitalize(item?.employeeName)}
                  </Text>
                  <Text style={{marginTop: 5, color: 'gray'}}>
                    {item?.designation} ({item?.employeeId})
                  </Text>
                </View>
              </View>
            );
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
