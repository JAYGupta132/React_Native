import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';
import axios from 'axios';

export default function MarkAttendance({navigation}) {
  const [currentDate, setCurrentDate] = useState(moment());
  const [employees, setEmployees] = useState([]);
  const [attendance, setAttendance] = useState([]);

  const goToNextDay = () => {
    const nextDate = moment(currentDate).add(1, 'days');
    setCurrentDate(nextDate);
  };

  const goToPrevDay = () => {
    const prevDate = moment(currentDate).subtract(1, 'days');
    setCurrentDate(prevDate);
  };

  const formatDate = date => {
    return date.format('MMMM DD, YYYY');
  };

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get('http://192.168.55.44:8000/employees');
        setEmployees(response.data);
      } catch (error) {
        console.log('Error while fetching Employee Data', error);
      }
    };
    fetchEmployeeData();
  }, []);

  const fetchAttendanceData = async () => {
    try {
      const response = await axios.get('http://192.168.55.44:8000/attendances', {
        params: {
          date: currentDate.format('MMMM D, YYYY'),
        },
      });
      setAttendance(response.data);
    } catch (error) {
      console.log('Error while fetching Attendance Data', error);
    }
  };

  useEffect(() => {
    fetchAttendanceData();
  }, [currentDate]);

  const employeeWithAttendance = employees.map(employee => {
    const attendanceRecord = attendance.find(
      record => (record.employeeId === employee.employeeId ),
    );
    return {
      ...employee,
      status: attendanceRecord ? attendanceRecord.status : '',
    };
  });
  
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
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
          <Pressable onPress={goToPrevDay}>
            <Image
              style={{width: 34, height: 28}}
              source={require('../images/left.png')}
            />
          </Pressable>
          <Text style={{fontSize: 20, fontWeight: '600'}}>
            {formatDate(currentDate)}
          </Text>
          <Pressable onPress={goToNextDay}>
            <Image
              style={{width: 28, height: 28, marginLeft: 3}}
              source={require('../images/right.png')}
            />
          </Pressable>
        </View>
        <View style={{marginHorizontal: 12, marginVertical: 12}}>
          {employeeWithAttendance.map((item, index) => (
            <Pressable
              onPress={() =>
                navigation.navigate('User', {
                  name: item?.employeeName,
                  id: item?.employeeId,
                  salary: item?.salary,
                  designation: item?.designation,
                })
              }
              key={index}
              style={{
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
                marginVertical: 10,
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
                  {item?.employeeName?.charAt(0).toUpperCase()}
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
                  {item?.employeeName}
                </Text>
                <Text style={{marginTop: 5, color: 'gray'}}>
                  {item?.designation} ({item?.employeeId})
                </Text>
              </View>
              {item?.status && (
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 25,
                    // padding: 10,
                    backgroundColor: 'green',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#fff',
                      fontWeight: 'bold',
                      textTransform: 'capitalize',
                    }}>
                    {item.status.charAt(0)}
                  </Text>
                </View>
              )}
            </Pressable>
          ))}
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
