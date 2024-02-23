
import React from 'react';
import {Text, View} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';

export default function DropDown() {
  const [country, setCountry] = React.useState('India');
  const [city, setCity] = React.useState("Mumbai");
  const [items, setItems] = React.useState([]);

  // console.log("country:",country);

  const countryData = [
    {name: 'India', code: 'IN', cities: ['Mumbai', 'Indore']},
    {name: 'Pakistan', code: 'PK', cities: ['Kabul', 'Karachi']},
    {name: 'America', code: 'US', cities: ['Miami', 'Chicago']},
  ];

  const handleCountry = () => {
    setItems(countryData.find(item => item.name == country)?.cities);
  };

  // console.log(items);
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{marginHorizontal: 20, marginVertical: 20}}>
        <SelectList
          search={false}
          onSelect={handleCountry}
          placeholder="Country"
          defaultOption={{key: 1, value: country}}
          setSelected={val => setCountry(val)}
          data={countryData.map((item, index) => {
            return item.name;
          })}
        />
      </View>
      <View style={{marginHorizontal: 20, marginVertical: 20}}>
        <SelectList
          search={false}
          // onSelect={handleCountry}
          placeholder="City"
          defaultOption={{key: 1, value: city}}
          setSelected={index => setCity(index)}
          data={items?.map((item, index) => {
           return item
          })}
        />
      </View>
    </View>
  );
}


