import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const DropdownOne = () => {
  const data = [
    {name: 'India', code: 'IN', cities: ['Mumbai', 'Indore']},
    {name: 'Pakistan', code: 'PK', cities: ['Kabul', 'Karachi']},
    {name: 'America', code: 'US', cities: ['Miami', 'Chicago']},
  ];

  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);

  const handleCity = country => {
    const items = data.find(item => item.name === country);
    return items ? items.cities : [];
  };

  return (
    <View>
      <View style={{backgroundColor: 'white', padding: 10, borderRadius: 15}}>
        <Dropdown
          style={styles.dropdown}
          data={data}
          labelField="name"
          valueField="name"
          placeholder="--Country--"
          value={country}
          onChange={item => {
            setCountry(item.name);
            setCity(null);
          }}
        />

        <Dropdown
          style={styles.dropdown}
          data={handleCity(country).map(city => ({
            name: city,
          }))}
          labelField="name"
          valueField="name"
          placeholder="--City--"
          value={city}
          onChange={item => {
            setCity(item.name);
          }}
        />
      </View>
    </View>
  );
};
export default DropdownOne;

const styles = StyleSheet.create({
  dropdown: {
    paddingHorizontal: 10,
    height: 50,
    borderWidth: 1,
    marginBottom: 20,
  },
});
