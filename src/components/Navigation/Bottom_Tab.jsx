import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Home from '../Screens/Home';
import Explore from '../Screens/Explore';
import Setting from '../Screens/Setting';

const BottomTab = createBottomTabNavigator();

export const Bottom_Tab = () => {
  return (
    <BottomTab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Explore" component={Explore} />
      <BottomTab.Screen name="Setting" component={Setting} />
    </BottomTab.Navigator>
  );
};

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const handleIcon = label => {
          switch (label) {
            case 'Home':
              return require('../../assets/home.png');
              break;

            case 'Explore':
              return require('../../assets/explore.png');
              break;

            case 'Setting':
              return require('../../assets/settings.png');
              break;
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 5,
            }}>
            <Image
              style={{
                tintColor: isFocused ? '#673ab7' : '#222',
                height: 20,
                width: 20,
              }}
              source={handleIcon(label)}
            />
            <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
