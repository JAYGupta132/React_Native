import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function Index({navigation}) {
  return (
    <LinearGradient colors={['#BA8AED', '#E9E4F0']} style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 12,
        }}>
        <Image
          style={{height: 24, width: 24, tintColor: '#515151'}}
          source={require('../images/bar-chart.png')}
        />
        <Text
          style={{
            fontSize: 19,
            color: '#000',
            fontWeight: '600',
            backgroundColor: '#BA8Acc',
            elevation: 10,
            shadowColor: '#fff',
            padding: 10,
            borderRadius: 10,
          }}>
          Employee Management System
        </Text>
        <Image
          style={{height: 24, width: 24, tintColor: '#515151'}}
          source={require('../images/lock.png')}
        />
      </View>
      <ScrollView>
        <View style={{padding: 12}}>
          <View
            style={{
              // marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
            }}>
            <Pressable
              onPress={() => navigation.navigate('Employee')}
              style={{
                backgroundColor: '#D3CCE3',
                padding: 12,
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#515151'}}
                  source={require('../images/group.png')}
                />
              </View>
              <Text style={{marginTop: 7, fontWeight: '600', color: '#000'}}>
                Employee List
              </Text>
            </Pressable>
            <Pressable
            onPress={() => navigation.navigate('MarkAttendance')}
              style={{
                backgroundColor: '#D3CCE3',
                padding: 12,
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#515151'}}
                  source={require('../images/markAttendance.png')}
                />
              </View>
              <Text style={{marginTop: 7, fontWeight: '600', color: '#000'}}>
                Mark Attendance
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              marginTop: 20,
              backgroundColor: '#fff',
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 7,
            }}>
            <Pressable
              style={{
                backgroundColor: '#BE93C5',
                borderRadius: 6,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <View
                style={{
                  height: 45,
                  width: 45,
                  backgroundColor: '#fff',
                  padding: 7,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#000'}}
                  source={require('../images/doc.png')}
                />
              </View>
              <Text
                style={{
                  color: '#000',
                  fontWeight: '600',
                  paddingLeft: 10,
                  flex: 1,
                }}>
                Attendance Report
              </Text>
              <View
                style={{
                  height: 35,
                  width: 35,
                  backgroundColor: '#fff',
                  padding: 7,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#313131'}}
                  source={require('../images/arrow.png')}
                />
              </View>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: '#BE93C5',
                borderRadius: 6,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <View
                style={{
                  height: 45,
                  width: 45,
                  backgroundColor: '#fff',
                  padding: 7,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#515151'}}
                  source={require('../images/summary.png')}
                />
              </View>
              <Text
                style={{
                  color: '#000',
                  fontWeight: '600',
                  paddingLeft: 10,
                  flex: 1,
                }}>
                Summary Report
              </Text>
              <View
                style={{
                  height: 35,
                  width: 35,
                  backgroundColor: '#fff',
                  padding: 7,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#313131'}}
                  source={require('../images/arrow.png')}
                />
              </View>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: '#BE93C5',
                borderRadius: 6,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <View
                style={{
                  height: 45,
                  width: 45,
                  backgroundColor: '#fff',
                  padding: 7,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 24, width: 34, tintColor: '#212121'}}
                  source={require('../images/report.png')}
                />
              </View>
              <Text
                style={{
                  color: '#000',
                  fontWeight: '600',
                  paddingLeft: 10,
                  flex: 1,
                }}>
                All Generate Report
              </Text>
              <View
                style={{
                  height: 35,
                  width: 35,
                  backgroundColor: '#fff',
                  padding: 7,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#313131'}}
                  source={require('../images/arrow.png')}
                />
              </View>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: '#BE93C5',
                borderRadius: 6,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <View
                style={{
                  height: 45,
                  width: 45,
                  backgroundColor: '#fff',
                  padding: 7,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#515151'}}
                  source={require('../images/group.png')}
                />
              </View>
              <Text
                style={{
                  color: '#000',
                  fontWeight: '600',
                  paddingLeft: 10,
                  flex: 1,
                }}>
                OverTime Employee
              </Text>
              <View
                style={{
                  height: 35,
                  width: 35,
                  backgroundColor: '#fff',
                  padding: 7,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#313131'}}
                  source={require('../images/arrow.png')}
                />
              </View>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: '#BE93C5',
                borderRadius: 6,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <View
                style={{
                  height: 45,
                  width: 45,
                  backgroundColor: '#fff',
                  padding: 7,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#000'}}
                  source={require('../images/holidays.png')}
                />
              </View>
              <Text
                style={{
                  color: '#000',
                  fontWeight: '600',
                  paddingLeft: 10,
                  flex: 1,
                }}>
                Holidays Calender
              </Text>
              <View
                style={{
                  height: 35,
                  width: 35,
                  backgroundColor: '#fff',
                  padding: 7,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#313131'}}
                  source={require('../images/arrow.png')}
                />
              </View>
            </Pressable>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 12,
            }}>
            <View
              style={{
                backgroundColor: '#8ABFED',
                borderRadius: 6,
                padding: 12,
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 5,
                }}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#313131'}}
                  source={require('../images/attendance.png')}
                />
              </View>
              <Text style={{color: '#000', fontWeight: '600'}}>
                Attendance Criteria
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#99D8CD',
                borderRadius: 6,
                padding: 12,
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 5,
                }}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#313131'}}
                  source={require('../images/bar-chart.png')}
                />
              </View>
              <Text style={{color: '#000', fontWeight: '600'}}>
                Increased Workflow
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 12,
            }}>
            <View
              style={{
                backgroundColor: '#97A4A9',
                borderRadius: 6,
                padding: 12,
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 5,
                }}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#313131'}}
                  source={require('../images/costSaving.png')}
                />
              </View>
              <Text style={{color: '#000', fontWeight: '600'}}>
                Cost Shaving
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#86D5E7',
                borderRadius: 6,
                padding: 12,
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 5,
                }}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#313131'}}
                  source={require('../images/performance.png')}
                />
              </View>
              <Text style={{color: '#000', fontWeight: '600'}}>
                Employee Performance
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({});
