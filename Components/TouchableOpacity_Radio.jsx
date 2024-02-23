import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Touchable_Opacity() {
  const [clickedRadio, setClickedRadio] = useState(false);
  return (
    <View style={styles.main}>
      <View style={styles.radioWrapper}>
        <TouchableOpacity
          onPress={() => {
            setClickedRadio(true);
          }}>
          <View>
            <View style={styles.radio}>
              {clickedRadio ? <View style={styles.innerRadio}></View> : null}
            </View>
          </View>
        </TouchableOpacity>
        <Text style={styles.radioText}>Radio 1</Text>
      </View>
      <View style={styles.radioWrapper}>
        <TouchableOpacity
          onPress={() => {
            setClickedRadio(false);
          }}>
          <View>
            <View style={styles.radio}>
              {clickedRadio ? null : <View style={styles.innerRadio}></View>}
            </View>
          </View>
        </TouchableOpacity>
        <Text style={styles.radioText}>Radio 2</Text>
      </View>
    </View>
  );
}

styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    fontSize: 20,
    marginLeft: 5,
    color: 'black'
  },
  radio: {
    height: 30,
    width: 30,
    borderWidth: 1,
    borderColor: 'skyblue',
    borderRadius: 15,
  },
  radioWrapper: {
    flexDirection: 'row',
    marginTop: 15,
  },
  innerRadio: {
    backgroundColor: 'skyblue',
    height: 22,
    width: 22,
    margin: 3,
    borderRadius: 10,
  },
});
