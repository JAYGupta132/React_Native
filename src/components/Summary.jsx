import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';
import axios from 'axios';
import {DataTable} from 'react-native-paper';

export const Summary = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [currentDate, setCurrentDate] = useState(moment());

  const goToNextMonth = () => {
    const nextMonth = moment(currentDate).add(1, 'months');
    setCurrentDate(nextMonth);
  };

  const goToPrevMonth = () => {
    const prevMonth = moment(currentDate).subtract(1, 'months');
    setCurrentDate(prevMonth);
  };

  const formatDate = date => {
    return date.format('MMMM, YYYY');
  };

  const fetchAttendanceReport = async () => {
    try {
      const response = await axios.get(
        `http://10.0.2.2:8000/attendance-report-all-employees`,
        {params: {month: 1, year: 2024}},
      );
      setAttendanceData(response.data.report);
    } catch (error) {
      console.log('Error fetching attendance summary report', error);
    }
  };

  useEffect(() => {
    fetchAttendanceReport();
  }, []); 
  
  return (
    <ScrollView style={{flex: 1}}>
      <Pressable>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginVertical: 20,
          }}>
          <Pressable onPress={goToPrevMonth}>
            <Image
              style={{width: 34, height: 28}}
              source={require('../images/left.png')}
            />
          </Pressable>
          <Text style={{fontSize: 20, fontWeight: '600'}}>
            {formatDate(currentDate)}
          </Text>
          <Pressable onPress={goToNextMonth}>
            <Image
              style={{width: 28, height: 28, marginLeft: 3}}
              source={require('../images/right.png')}
            />
          </Pressable>
        </View>
        <View style={{marginHorizontal: 10, marginVertical: 12}}>
          {attendanceData.map((item, index) => (
            <View
            key={index}
              style={{
                padding: 5,
                elevation: 8,
                backgroundColor: '#fff',
                marginBottom: 15,
                borderRadius: 5,
              }}>
              <Pressable
                
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  alignItems: 'center',
                  marginVertical: 10,
                  marginHorizontal: 5,
                }}>
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
                    {item?.name?.charAt(0).toUpperCase()}
                  </Text>
                </View>
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: '#000',
                      textTransform: 'capitalize',
                    }}>
                    {item?.name}
                  </Text>
                  <Text style={{marginTop: 5, color: 'gray'}}>
                    {item?.designation} ({item?.employeeId})
                  </Text>
                </View>
              </Pressable>
              <View
                style={{
                  marginHorizontal: 5,
                  marginBottom: 10,
                  padding: 5,
                  backgroundColor: '#A1FFCE',
                  borderRadius: 5,
                }}>
                <DataTable>
                  <DataTable.Header>
                    <DataTable.Title>P</DataTable.Title>
                    <DataTable.Title>A</DataTable.Title>
                    <DataTable.Title>HD</DataTable.Title>
                    <DataTable.Title>H</DataTable.Title>
                    <DataTable.Title>NW</DataTable.Title>
                  </DataTable.Header>
                  <DataTable.Row>
                    <DataTable.Cell>{item?.present}</DataTable.Cell>
                    <DataTable.Cell>{item?.absent}</DataTable.Cell>
                    <DataTable.Cell>{item?.halfday}</DataTable.Cell>
                    <DataTable.Cell>8</DataTable.Cell>
                    <DataTable.Cell>8</DataTable.Cell>
                  </DataTable.Row>
                </DataTable>
              </View>
            </View>
          ))}
        </View>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
