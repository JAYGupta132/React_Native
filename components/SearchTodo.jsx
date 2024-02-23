import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import COLORS from './colors/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Details from './ShowTodo'

const SearchTodo = () => {
  return (
    <View style={styles.searchView}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.searchTitle}>SearchTodo</Text>
      </View>
      <View style={styles.searchInput}>
        <TextInput style={{flex: 1, fontSize: 18}} placeholder="Search Todo" />
        <Icon name="search" size={30} />
      </View>
    </View>
  );
};

export default SearchTodo;

const styles = StyleSheet.create({
  searchTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#fff',
    backgroundColor: COLORS.primary,
    paddingTop: 10,
    marginTop: 0,
    paddingHorizontal: 19,
    paddingBottom: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  searchView: {
    backgroundColor: 'white',
  },
  searchInput: {
    marginHorizontal: 12,
    marginVertical: 20,
    backgroundColor: COLORS.white,
    elevation: 15,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
