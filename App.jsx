// import React, {useCallback, useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   Button,
//   // ScrollView,
//   TextInput,
//   ActivityIndicator
// } from 'react-native';
// import axios from 'axios';
// import { Card} from 'react-native-paper';
// function App() {
//   const [data, setData] = useState([]);
//   const [newItem, setNewItem] = useState({title: '', body: ''});
//   const [selectItemId, setSelectItemId] = useState(null);
//   const [currentpage,setCurrentpage] = useState(1)
//   const [loadmore,setLoadmore] = useState(true)
//   const limit = 10;
//   useEffect(() => {
//     getData();
//   },[]);
//   // const getData = ()=>{
//   //   fetch('https://jsonplaceholder.typicode.com/posts')
//   //   .then(response => response.json())
//   //   .then(json => console.log(json))
//   // }
//   const getData = async () => {
//     try{
//     const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${currentpage}&_limit=${limit}`);
//     setData([...data,...res.data]);
//      if(res.data.length===0){
//       setLoadmore(false)
//      }
//     }
//     catch(err){
//       console.log(err)
//     }
//   };
//   const handleUpdate = async () => {
//     try {
//       const res = await axios.put(
//         `https://jsonplaceholder.typicode.com/posts/${selectItemId}`,
//         newItem,
//       );
//       const updateItem = res.data;
//       const updateData = data.map(item =>
//         item.id === selectItemId ? updateItem : item,
//       );
//       setData(updateData);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   const selectForUpdateItem = id => {
//     console.log(id, 'id');
//     const selectItem = data.find(item => item.id === id);
//     if (selectItem) {
//       setNewItem({title: selectItem.title, body: selectItem.body});
//       setSelectItemId(id);
//     }
//   };

//   const handleCreate = async () => {
//     console.log('create');
//     try {
//       const res = await axios.post(
//         'https://jsonplaceholder.typicode.com/posts',
//         newItem,
//       );
//       const createItem = res.data;
//       setData([...data, createItem]);
//       setNewItem({title: '', body: ''});
//     } catch (err) {
//       console.error('error', err);
//     }
//   };

//   const handleDelete = async id => {
//     try {
//       const res = await axios.delete(
//         `https://jsonplaceholder.typicode.com/posts/${id}`,
//       );
//       const newData = data.filter(item => item.id !== id);
//       setData([...data, ...newData])
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   const onEnd = () => {
//       setCurrentpage(currentpage+1) 
//       if(loadmore){
//         getData()
//     }
//   }
//   const Loader = () => {
//     return(
//       <View>
//         <ActivityIndicator size={'large'}/>
//       </View>
//     )
//   }
//   return (
//     <View style={{justifyContent: 'center', alignItems: 'center'}}>
//       <Text style={{fontSize: 20, fontWeight: 'bold'}}>Crud Operation</Text>
//       <TextInput
//         value={newItem.title}
//         onChangeText={text => setNewItem({...newItem, title: text})}
//         type="text"
//         style={{height: 40, width: 300, borderWidth: 1, marginVertical: 10}}
//         placeholder="Enter title"
//       />
//       <TextInput
//         type="text"
//         style={{height: 40, width: 300, borderWidth: 1, marginVertical: 10}}
//         value={newItem.body}
//         onChangeText={text => setNewItem({...newItem, body: text})}
//         placeholder="Enter desc"
//       />
//       {selectItemId ? (
//         <View style={{marginVertical: 10}}>
//           <Button title="Update" onPress={() => handleUpdate()} />
//         </View>
//       ) : (
//         <View style={{marginVertical: 10}}>
//           <Button title="Create" onPress={() => handleCreate()} />
//         </View>
//       )}
//       <FlatList
//         data={data}
//         style={{height: 600}}
//         ListFooterComponent={Loader}
//         onEndReached={onEnd}
//         onEndReachedThreshold={0}
//         renderItem={({item, index}) => (
//           <View
//             style={{
//               margin: 20,
//               elevation: 10,
//               backgroundColor: 'white',
//             }}>
//             <Card key={item.id}>
//               <Card.Content>
//                 <Text style={{fontSize: 20, color: 'black'}}>
//                   id : -{item.id}
//                 </Text>
//                 <Text style={{fontSize: 20, color: 'black'}}>
//                   Title : -{item.title}
//                 </Text>
//                 <Text style={{fontSize: 20, color: 'black'}}>
//                   Desc : -{item.body}
//                 </Text>
//                 <View style={{marginVertical: 10}}>
//                   <Button
//                     title="Update"
//                     onPress={() => selectForUpdateItem(item.id)}
//                   />
//                 </View>

//                 <Button title="Delete" onPress={() => handleDelete(item.id)} />
//               </Card.Content>
//             </Card>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// export default App;

import { View, Text } from 'react-native'
import React from 'react'
import FileUploadComponent from './components/ImageToServer'

export default function App() {
  return (
    <View>
      <FileUploadComponent />
    </View>
  )
}