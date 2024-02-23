import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export default function Grid() {
  const users = [
    {
      id: 11,
      name: 'user21',
    },
    {
      id: 12,
      name: 'user22',
    },
    {
      id: 13,
      name: 'user23',
    },
    {
      id: 14,
      name: 'user24',
    },
    {
      id: 15,
      name: 'user25',
    },
    {
      id: 16,
      name: 'user11',
    },
    {
      id: 72,
      name: 'user12',
    },
    {
      id: 28,
      name: 'user13',
    },
    {
      id: 35,
      name: 'user45',
    },
    {
      id: 35,
      name: 'user45',
    },
    {
      id: 35,
      name: 'user45',
    },
    {
      id: 35,
      name: 'user45',
    },
    {
      id: 35,
      name: 'user45',
    },
    {
      id: 35,
      name: 'user45',
    },
    {
      id: 35,
      name: 'user45',
    },
    {
      id: 35,
      name: 'user45',
    },
    {
      id: 35,
      name: 'user45',
    },
    {
      id: 35,
      name: 'user45',
    },
    {
      id: 35,
      name: 'user45',
    },
    {
      id: 35,
      name: 'user45',
    },
    {
      id: 35,
      name: 'user45',
    },
    {
      id: 35,
      name: 'user45',
    },
    {
      id: 35,
      name: 'user45',
    },
    {
      id: 35,
      name: 'user45',
    },
    {
      id: 35,
      name: 'user45',
    },
    {
      id: 35,
      name: 'user45',
    },
  ];
  return (
    <>
      <Text style={styles.head}>Grid list</Text>
      <ScrollView style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        <>
          {users.map(item => (
            <Text style={styles.item}>{item.name}</Text>
          ))}
        </>
      </ScrollView>
    </>
  );
}

styles = StyleSheet.create({
  head: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
  },
  item: {
    backgroundColor: 'blue',
    margin: 4,
    padding: 20,
  },
});

// To achieve the desired functionality where the city of the first index of the selected country is automatically set as the default value for the city dropdown, you can modify the handleCountry function to update the city state with the first city of the selected country. Additionally, you should call this function initially when the component mounts to set the default city. Here's the modified code:

// jsx
// Copy code
// import React, { useEffect } from 'react';
// import { Text, View } from 'react-native';
// import { SelectList } from 'react-native-dropdown-select-list';

// export default function DropDown() {
//   const [country, setCountry] = React.useState('India');
//   const [city, setCity] = React.useState('Mumbai');
//   const [items, setItems] = React.useState([]);

//   const countryData = [
//     { name: 'India', code: 'IN', cities: ['Mumbai', 'Indore'] },
//     { name: 'Pakistan', code: 'PK', cities: ['Kabul', 'Karachi'] },
//     { name: 'America', code: 'US', cities: ['Miami', 'Chicago'] },
//   ];

//   const handleCountry = () => {
//     const selectedCountry = countryData.find((item) => item.name === country);
//     if (selectedCountry) {
//       setItems(selectedCountry.cities);
//       // Set the default city to the first city of the selected country
//       setCity(selectedCountry.cities[0]);
//     }
//   };

//   // Call handleCountry initially to set the default city
//   useEffect(() => {
//     handleCountry();
//   }, []);

//   return (
//     <View style={{ flex: 1, flexDirection: 'row' }}>
//       <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
//         <SelectList
//           search={false}
//           onSelect={handleCountry}
//           placeholder="Country"
//           defaultOption={{ key: 1, value: country }}
//           setSelected={(val) => setCountry(val)}
//           data={countryData.map((item, index) => item.name)}
//         />
//       </View>
//       <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
//         <SelectList
//           search={false}
//           placeholder="City"
//           defaultOption={{ key: 1, value: city }}
//           setSelected={(index) => setCity(index)}
//           data={items?.map((item, index) => item)}
//         />
//       </View>
//     </View>
//   );
// }
// In this modification:

// I added the useEffect hook to call the handleCountry function initially when the component mounts.
// In the handleCountry function, after setting the items for the city dropdown, I set the default city to the first city of the selected country.
