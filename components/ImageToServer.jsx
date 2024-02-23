// import React, { useState } from 'react';
// import { View, Button, ActivityIndicator, Text } from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';
// import axios from 'axios';

// const FileUploadComponent = () => {
//   // const [uploading, setUploading] = useState(false);

//   // const selectImage = async () => {
//   //   try {
//   //     const image = await ImagePicker.openPicker({
//   //       width: 300,
//   //       height: 400,
//   //       cropping: true,
//   //     });

//   //     // Handle the selected image
//   //     uploadFile(image);
//   //   } catch (error) {
//   //     console.error('Image picker error:', error);
//   //   }
//   // };

//   // const uploadFile = async image => {
//   //   try {
//   //     setUploading(true);

//   //     // Create FormData object
//   //     const formData = new FormData();

//   //     // Append the image to the FormData with a key
//   //     formData.append('file', {
//   //       uri: image.path,
//   //       type: image.mime,
//   //       name: 'image.jpg',
//   //     });

//   //     // Append additional form data (if any)
//   //     formData.append('description', 'A description for the image');

//   //     // Make a POST request using axios
//   //     const response = await axios.post('https://jsonplaceholder.typicode.com/posts/upload', formData, {
//   //       headers: {
//   //         'Content-Type': 'multipart/form-data',
//   //       },
//   //     });

//   //     // Handle the response
//   //     console.log('File uploaded successfully', response.data);
//   //   } catch (error) {
//   //     // Handle errors
//   //     console.error('Error uploading file', error);
//   //   } finally {
//   //     setUploading(false);
//   //   }
//   // };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       {/* {uploading ? ( */}
//         <Button title="Select Image" />
//         {/* <View>
//           <Text>Uploading File...</Text>
//           <ActivityIndicator size="large" color="#0000ff" />
//         </View> */}
//       {/* ) : ( */}
//       {/* )} */}
//     </View>
//   );
// };

// export default FileUploadComponent;

// import {View, Text, Button, Image} from 'react-native';
// import React, { useState } from 'react';
// import ImagePicker from 'react-native-image-crop-picker';
// import axios from 'axios';
// // import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
// export default function FileUploadComponent() {
//   const [uploading, setUploading] = useState(false);
//   const [filePAth, setFilePath] = useState('');
//     const Image_Picker = () => {
//     ImagePicker.openPicker({
//       width: 300,
//       height: 400,
//       cropping: true,
//       // multiple: true,
//     }).then(image => {
//       console.log(image.path);
//       setFilePath(image.path);
//     });
//   };

//   const handleImage = (image) => {
//     uploadFile(image)
//   }
//   const uploadFile = async image => {
//     try {
//       setUploading(true);
//       // Create FormData object
//       const formData = new FormData();
//       // Append the image to the FormData with a key
//       formData.append('file', {
//         uri: image.path,
//         type: image.mime,
//         name: 'image.jpg',
//       });
//       // Append additional form data (if any)
//       formData.append('description', 'A description for the image');
//       // Make a POST request using axios
//       const response = await axios.post(
//         'https://jsonplaceholder.typicode.com/posts',
//         formData,
//         {
          
//         },
//       );
//       // Handle the response
//       console.log('File uploaded successfully', response.data);
//     } catch (error) {
//       // Handle errors
//       console.error('Error uploading file', error);
//     } finally {
//       setUploading(false);
//     }
//   };
//   return (
//     <View>
//       <Text>ImageToServer</Text>
//       <Button title="Select Image" onPress={Image_Picker} />
//       <Image style={{width: 200, height: 200}} source={{uri: filePAth}} />
//       <Button title='save' onPress={handleImage} /> 
//     </View>
//   );
// }


// import { View, Text, Button, Image } from 'react-native';
// import React, { useState } from 'react';
// import ImagePicker from 'react-native-image-crop-picker';
// import axios from 'axios';

// export default function FileUploadComponent() {
//   const [uploading, setUploading] = useState(false);
//   const [filePath, setFilePath] = useState('');

//   const ImagePickerHandler = () => {
//     ImagePicker.openPicker({
//       width: 300,
//       height: 400,
//       cropping: true,
//     }).then(image => {
//       console.log(image.path);
//       setFilePath(image.path);
//     });
//   };

//   const handleImageUpload = () => {
//     if (!filePath) {
//       console.error('Please select an image first');
//       return;
//     }

//     const image = {
//       path: filePath,
//       mime: 'image/jpeg', // You may need to determine the correct mime type based on the image
//     };

//     uploadFile(image);
//   };

//   const uploadFile = async image => {
//     try {
//       setUploading(true);

//       const formData = new FormData();
//       formData.append('file', {
//         uri: image.path,
//         type: image.mime,
//         name: 'image.jpg',
//       });

//       formData.append('description', 'A description for the image');

//       const response = await axios.post(
//         'https://jsonplaceholder.typicode.com/posts',
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         },
//       );

//       console.log('File uploaded successfully', response.data);
//     } catch (error) {
//       console.error('Error uploading file', error);
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <View>
//       <Text>ImageToServer</Text>
//       <Button title="Select Image" onPress={ImagePickerHandler} />
//       {filePath ? (
//         <Image style={{ width: 200, height: 200 }} source={{ uri: filePath }} />
//       ) : null}
//       <Button title="Save" onPress={handleImageUpload} />
//     </View>
//   );
// }



import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Button, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import RNFS from 'react-native-fs';
export default function FileUploadComponent() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [base64Image, setBase64Image] = useState(null);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`);
    const newData = await response.json();
    
    setData((prevData) => [...prevData, ...newData]);

    setPage((prevPage) => prevPage + 1);
    setIsLoading(false);
  };

  const pickImage = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        includeBase64: true
      });
  
      if (image) {
        const imageData = await RNFS.readFile(image.path, 'base64');
        const base64Image = `data:${image.mime};base64,${imageData}`;
        console.log(base64Image);
        setBase64Image(base64Image)
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  return (
    <View>
      
    <Button title="Select Image" onPress={pickImage} />
    {base64Image && (
        <Image
          style={{ width: 100, height: 100, alignSelf: 'center' }}
          source={{ uri: base64Image }}
        />
      )}  
      
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22,
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
//   footer: {
//     paddingVertical: 20,
//     borderTopWidth: 1,
//     borderColor: '#CED0CE',
//   },
// });