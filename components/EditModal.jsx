import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import COLORS from './colors/colors';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import TodoForm from './TodoForm';

export default function EditModal({isEditing,setIsEditing,eIndex, editTitle, editDescription}) {
  const [editedTitle, setEditedTitle] = useState('')
  const [editedDes, setEditedDes] = useState('')
  return (
    
      <Modal transparent={true} style={{height: 8000}} visible={true}>
        <ScrollView>
          <View style={styles.modalBody}>
               <View style={{alignItems: 'center', justifyContent: 'center', padding: 0, flexDirection: 'row'}}>
                <Icon onPress={()=>setIsEditing(false)} style={styles.closeIcon} name="close" size={35} />
                
              </View>
            <View style={styles.modalView}>
              {/*<View style={{padding: 20}}>
                <View style={{marginVertical: 15}}>
                  <Text
                    style={{
                      fontSize: 22,
                      color: COLORS.dark,
                      fontWeight: 'bold',
                    }}>
                    Title
                  </Text>
                  <TextInput
                    style={styles.inputTitle}
                    placeholder="editing title"
                    value={editTitle}
                    onChangeText={(text)=>setEditedTitle(text)}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 22,
                      color: COLORS.dark,
                      fontWeight: 'bold',
                    }}>
                    Description
                  </Text>
                  <TextInput
                    multiline={true}
                    numberOfLines={10}
                    style={{
                      ...styles.inputTitle,
                      height: 150,
                      textAlignVertical: 'top',
                    }}
                    placeholder="editing Description"
                    value={editDescription}
                    onChangeText={(text)=>setEditedDes(text)}
                  />
                </View>
                <TouchableOpacity style={styles.editBtn}>
                  <Text style={{fontSize: 20, color: COLORS.white}}>
                    Update
                  </Text>
                </TouchableOpacity>
              </View> */}
            <TodoForm eIndex={eIndex} editTitle={editTitle} editDescription={editDescription} isEditing={isEditing} />
            </View>
          </View>
        </ScrollView>
      </Modal>
   
  );
}

const styles = StyleSheet.create({
  main: {
    // flex: 1,
    // height: 8000,
    // justifyContent: 'flex-end',
    // backgroundColor: COLORS.white,
  },
  modalBody: {
    flex: 1,
    // height: 750,
    // justifyContent: 'center',
    // alignItems: 'center',
    // opacity: 0.5
    // position: 'absolute',
    backgroundColor: "rgba(50,50,50,0.7)"


    // background: 'blur'
  },
  modalView: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 20,
    marginTop: 56,
    marginBottom: 106,
    marginHorizontal: 20,
    // position: 'absolute'
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#fff',
    backgroundColor: COLORS.primary,
    paddingTop: 10,
    marginTop: 0,
    paddingHorizontal: 31,
    paddingBottom: 7,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: 30
  },
  inputTitle: {
    padding: 5,
    marginVertical: 10,
    fontSize: 18,
    borderRadius: 5,
    backgroundColor: '#fff',
    elevation: 10,
  },
  editBtn: {
    marginVertical: 50,
    // marginHorizontal: 30,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 12,
    elevation: 15,
  },
  closeIcon: {
    // backgroundColor: 'gray',
    textAlign: 'right',
    bottom: -58,
    right: -155,
    // opacity: 0.8,
    color: COLORS.white
  },
});
