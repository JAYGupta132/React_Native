import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import moment from 'moment';
import axios from 'axios';

export default function User(props) {
  const [currentDate, setCurrentDate] = useState(moment());
  const [attendanceStatus, setAttendanceStatus] = useState('present');

  const params = props.route.params;

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

  const submitAttendance = async () => {
    try {
      const attendanceData = {
        employeeId: params?.id,
        employeeName: params?.name,
        date: currentDate.format("MMMM D, YYYY"),
        status: attendanceStatus,
      }
      const response = await axios.post("http://10.0.2.2:8000/attendances", attendanceData);
      
      if(response.status === 200){
        Alert.alert(`Attendance submitted successfully for ${params?.name}`)
      }
    } catch (error) {
      console.log("Error submitting Attendance:", error)
    }
  }

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
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
        <Pressable
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
              {params?.name?.charAt(0).toUpperCase()}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#000',
                textTransform: 'capitalize',
              }}>
              {params?.name}
            </Text>
            <Text style={{marginTop: 5, color: 'gray'}}>
              {params.designation} ({params.id})
            </Text>
          </View>
        </Pressable>

        <Text style={{color: '#000', fontWeight: '600', fontSize: 18}}>
          Basic Pay : {params.salary}
        </Text>
        <View>
          <Text
            style={{
              color: '#000',
              fontWeight: '600',
              fontSize: 18,
              letterSpacing: 2,
            }}>
            ATTENDANCE
          </Text>
          <View style={{marginTop: 10, flexDirection: 'row', gap: 20}}>
            <Pressable
              onPress={() => setAttendanceStatus('present')}
              style={{
                backgroundColor: '#C4E0E5',
                flexDirection: 'row',
                padding: 10,
                borderRadius: 8,
                alignItems: 'center',
                gap: 10,
                flex: 1,
              }}>
              {attendanceStatus === 'present' ? (
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../images/dotCircle.png')}
                />
              ) : (
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../images/circle.png')}
                />
              )}
              <Text>Present</Text>
            </Pressable>
            <Pressable
              onPress={() => setAttendanceStatus('absent')}
              style={{
                backgroundColor: '#C4E0E5',
                flexDirection: 'row',
                padding: 10,
                borderRadius: 8,
                alignItems: 'center',
                gap: 10,
                flex: 1,
              }}>
              {attendanceStatus === 'absent' ? (
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../images/dotCircle.png')}
                />
              ) : (
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../images/circle.png')}
                />
              )}
              <Text>Absent</Text>
            </Pressable>
          </View>
          <View style={{marginTop: 10, flexDirection: 'row', gap: 20}}>
            <Pressable
              onPress={() => setAttendanceStatus('halfday')}
              style={{
                backgroundColor: '#C4E0E5',
                flexDirection: 'row',
                padding: 10,
                borderRadius: 8,
                alignItems: 'center',
                gap: 10,
                flex: 1,
              }}>
              {attendanceStatus === 'halfday' ? (
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../images/dotCircle.png')}
                />
              ) : (
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../images/circle.png')}
                />
              )}
              <Text>Half Day</Text>
            </Pressable>
            <Pressable
              onPress={() => setAttendanceStatus('holiday')}
              style={{
                backgroundColor: '#C4E0E5',
                flexDirection: 'row',
                padding: 10,
                borderRadius: 8,
                alignItems: 'center',
                gap: 10,
                flex: 1,
              }}>
              {attendanceStatus === 'holiday' ? (
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../images/dotCircle.png')}
                />
              ) : (
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../images/circle.png')}
                />
              )}
              <Text>Holiday</Text>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 10,
              alignItems: 'center',
              gap: 15,
            }}>
            <TextInput
              style={{
                borderRadius: 6,
                marginTop: 10,
                borderWidth: 2,
                borderColor: '#E0E0E0',
                padding: 10,
                flex: 1,
              }}
              placeholder="Advance / Loans"
              placeholderTextColor={'black'}
            />
            <TextInput
              style={{
                borderRadius: 6,
                marginTop: 10,
                borderWidth: 2,
                borderColor: '#E0E0E0',
                padding: 10,
                flex: 1,
              }}
              placeholder="Extra Bonus"
              placeholderTextColor={'black'}
            />
          </View>
        </View>
        <Pressable
        onPress={submitAttendance}
          style={{
            padding: 15,
            backgroundColor: '#00c6ff',
            width: 200,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 25,
            borderRadius: 6,
          }}>
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}>
            Submit Attendance
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
