import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const AddDetails = ({navigation}) => {
  const [name, setName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [dob, setDob] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [salary, setSalary] = useState('');
  const [address, setAddress] = useState('');
  const [designation, setDesignation] = useState('');

  const handleRegister = () => {
    const employeeData = {
      employeeName: name,
      employeeId: employeeId,
      dateOfBirth: dob,
      phoneNumber: mobileNo,
      joiningDate: joiningDate,
      activeEmployee: true,
      salary: salary,
      address: address,
      designation: designation,
    };

    axios
      .post('http://10.0.2.2:8000/addemployee', employeeData)
      .then(response => {
        Alert.alert(
          'Registration Successfully',
          'You have been registered successfully',
        );
        setName('');
        setDob('');
        setAddress('');
        setDesignation('');
        setEmployeeId('');
        setMobileNo('');
        setJoiningDate('');
        setSalary('');
      })
      .catch(error => {
        Alert.alert(
          'Registration failed',
          'An error occured during registration',
        );
        console.log('Registration error:', error);
      });
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{padding: 10}}>
        <View style={{flexDirection: 'row',alignItems: 'center'}}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.goBack()}>
            <Image
              style={{height: 20, width: 20}}
              source={require('../images/backArrow.png')}
            />
          </TouchableOpacity>
          <Text style={{color: '#000', fontSize: 19, fontWeight: 'bold', textAlign: 'center', flex: 1}}>
            Add a New Employee
          </Text>
        </View>
        <TextInput
          style={{
            borderColor: '#D0D0D0',
            borderBottomWidth: 2,
            marginTop: 10,
            borderRadius: 5,
            fontSize: 18,
            fontWeight: '900'
          }}
          placeholder="India"
          placeholderTextColor={'#000'}
        />
        <View style={{marginVertical: 10}}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
            Full Name
          </Text>

          <TextInput
            value={name}
            onChangeText={text => setName(text)}
            style={{
              padding: 10,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Full Name"
            placeholderTextColor={'#000'}
          />
        </View>
        <View>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
            Employee Id
          </Text>

          <TextInput
            value={employeeId}
            onChangeText={text => setEmployeeId(text)}
            style={{
              padding: 10,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Employee Id"
            placeholderTextColor={'#000'}
          />
        </View>
        <View style={{marginVertical: 10}}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
            Designation
          </Text>

          <TextInput
            value={designation}
            onChangeText={text => setDesignation(text)}
            style={{
              padding: 10,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Designation"
            placeholderTextColor={'#000'}
          />
        </View>
        <View>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
            Mobile Number
          </Text>

          <TextInput
            value={mobileNo}
            onChangeText={text => setMobileNo(text)}
            style={{
              padding: 10,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Mobile Number"
            placeholderTextColor={'#000'}
          />
        </View>
        <View style={{marginVertical: 10}}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
            Date Of Birth
          </Text>

          <TextInput
            value={dob}
            onChangeText={text => setDob(text)}
            style={{
              padding: 10,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Date Of Birth"
            placeholderTextColor={'#000'}
          />
        </View>
        <View>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
            Joining Date
          </Text>

          <TextInput
            value={joiningDate}
            onChangeText={text => setJoiningDate(text)}
            style={{
              padding: 10,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Joining Date"
            placeholderTextColor={'#000'}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 17, color: '#000', fontWeight: 'bold'}}>
            Active Employee
          </Text>
          <Text style={{color: '#000'}}>True</Text>
        </View>
        <View style={{marginVertical: 10}}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
            Salary
          </Text>

          <TextInput
            value={salary}
            onChangeText={text => setSalary(text)}
            style={{
              padding: 10,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Enter Salary"
            placeholderTextColor={'#000'}
          />
        </View>
        <View>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
            Address
          </Text>

          <TextInput
            value={address}
            onChangeText={text => setAddress(text)}
            style={{
              padding: 10,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Enter Address"
            placeholderTextColor={'#000'}
          />
        </View>
        <Pressable
          onPress={handleRegister}
          style={{
            backgroundColor: '#84bfa1',
            padding: 10,
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Text style={{fontWeight: 'bold', color: '#fff'}}>Add Employee</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default AddDetails;

const styles = StyleSheet.create({});
