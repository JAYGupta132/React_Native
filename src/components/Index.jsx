//192.168.1.56
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
    <LinearGradient colors={['#fff', '#000']} style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 12,
        }}>
        <Image
          style={{height: 24, width: 24, tintColor: '#818181'}}
          source={require('../images/bar-chart.png')}
        />
        <Text
          style={{
            fontSize: 19,
            color: '#fff',
            fontWeight: '600',
            backgroundColor: '#313131',
            elevation: 10,
            shadowColor: '#fff',
            padding: 10,
            borderRadius: 10,
          }}>
          Employee Management System
        </Text>
        <Image
          style={{height: 24, width: 24, tintColor: '#818181'}}
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
              style={styles.headerBackground}>
              <View style={styles.headerLogo}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#fff'}}
                  source={require('../images/group.png')}
                />
              </View>
              <Text style={{marginTop: 7, fontWeight: '600', color: '#fff'}}>
                Employee List
              </Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('MarkAttendance')}
              style={styles.headerBackground}>
              <View style={styles.headerLogo}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#fff'}}
                  source={require('../images/markAttendance.png')}
                />
              </View>
              <Text style={{marginTop: 7, fontWeight: '600', color: '#fff'}}>
                Mark Attendance
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              marginTop: 20,
              backgroundColor: '#000',
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 7,
            }}>
            <Pressable style={styles.contentBackground}>
              <View style={styles.contentLogo}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#fff'}}
                  source={require('../images/doc.png')}
                />
              </View>
              <Text style={styles.contentText}>Attendance Report</Text>
              <View style={styles.contentArrow}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#fff'}}
                  source={require('../images/arrow.png')}
                />
              </View>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('Summary')}
              style={styles.contentBackground}>
              <View style={styles.contentLogo}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#fff'}}
                  source={require('../images/summary.png')}
                />
              </View>
              <Text style={styles.contentText}>Summary Report</Text>
              <View style={styles.contentArrow}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#fff'}}
                  source={require('../images/arrow.png')}
                />
              </View>
            </Pressable>
            <Pressable style={styles.contentBackground}>
              <View style={styles.contentLogo}>
                <Image
                  style={{height: 24, width: 34, tintColor: '#fff'}}
                  source={require('../images/report.png')}
                />
              </View>
              <Text style={styles.contentText}>All Generate Report</Text>
              <View style={styles.contentArrow}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#fff'}}
                  source={require('../images/arrow.png')}
                />
              </View>
            </Pressable>
            <Pressable style={styles.contentBackground}>
              <View style={styles.contentLogo}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#fff'}}
                  source={require('../images/group.png')}
                />
              </View>
              <Text style={styles.contentText}>OverTime Employee</Text>
              <View style={styles.contentArrow}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#fff'}}
                  source={require('../images/arrow.png')}
                />
              </View>
            </Pressable>
            <Pressable onPress={()=> navigation.navigate("Calendars")} style={styles.contentBackground}>
              <View style={styles.contentLogo}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#fff'}}
                  source={require('../images/holidays.png')}
                />
              </View>
              <Text style={styles.contentText}>Holidays Calender</Text>
              <View style={styles.contentArrow}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#fff'}}
                  source={require('../images/arrow.png')}
                />
              </View>
            </Pressable>
          </View>
          <View style={styles.footerGroup}>
            <View style={styles.footerContainer}>
              <View style={styles.footer}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#fff'}}
                  source={require('../images/attendance.png')}
                />
              </View>
              <Text style={{color: '#fff', fontWeight: '600'}}>
                Attendance Criteria
              </Text>
            </View>
            <View style={styles.footerContainer}>
              <View style={styles.footer}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#fff'}}
                  source={require('../images/bar-chart.png')}
                />
              </View>
              <Text style={{color: '#fff', fontWeight: '600'}}>
                Increased Workflow
              </Text>
            </View>
          </View>
          <View style={styles.footerGroup}>
            <View style={styles.footerContainer}>
              <View style={styles.footer}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#fff'}}
                  source={require('../images/costSaving.png')}
                />
              </View>
              <Text style={{color: '#fff', fontWeight: '600'}}>
                Cost Shaving
              </Text>
            </View>
            <View style={styles.footerContainer}>
              <View style={styles.footer}>
                <Image
                  style={{height: 24, width: 24, tintColor: '#fff'}}
                  source={require('../images/performance.png')}
                />
              </View>
              <Text style={{color: '#fff', fontWeight: '600'}}>
                Employee Performance
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: 35,
    height: 35,
    borderRadius: 7,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  footerContainer: {
    backgroundColor: '#313131',
    borderRadius: 6,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  footerGroup: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  contentArrow: {
    height: 35,
    width: 35,
    backgroundColor: '#000',
    padding: 7,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentLogo: {
    height: 45,
    width: 45,
    backgroundColor: '#000',
    padding: 7,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentBackground: {
    backgroundColor: '#313131',
    borderRadius: 6,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  contentText: {
    color: '#fff',
    fontWeight: '600',
    paddingLeft: 10,
    flex: 1,
  },
  headerLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBackground: {
    backgroundColor: '#313131',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
