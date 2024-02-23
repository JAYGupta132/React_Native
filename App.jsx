import {
  Alert,
  Button,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import RNFetchBlob from 'rn-fetch-blob';
export default function App() {
  const [pastedURL, setPastedURL] = useState('');

  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Downloader App Storage Permission',
          message:
            'Downloader App needs access to your storage ' +
            'so you can download awesome files.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        downloadFile();
      } else {
        console.log('Storage permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const downloadFile = () => {
    const {config, fs} = RNFetchBlob;
    const fileDir = fs.dirs.DownloadDir;
    config({
      // add this option that makes response data to be stored as a file,
      // this is much more performant.
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path:
          fileDir +
          '/download_' +
          '.mp4',
        description: 'file download',
      },
    })
      .fetch('GET', pastedURL, {
        //some headers ..
      })
      .then(res => {
        // the temp file path
        console.log('The file saved to ', res.path());
        alert("File Downloaded successfully...")
      });
  };

  return (
    <View style={{height: 500, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        style={{
          borderWidth: 1,
          marginVertical: 30,
          width: 300,
          padding: 10,
          borderRadius: 20,
          borderColor: '#fff',
        }}
        placeholder="Enter URL / paste link "
        value={pastedURL}
        onChangeText={text => setPastedURL(text)}
      />
      <Button
        title="Download"
        onPress={() => {
          if (pastedURL !== '') {
            requestStoragePermission();
          } else {
            Alert.alert('Please Add URL');
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
