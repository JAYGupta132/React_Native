import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import Video from 'react-native-video';

const CustomImagePicker = () => {
  const [filePAth, setFilePath] = useState('');
  const [multiplaImg, setMultipleImg] = useState([]);
  const [cameraImage, setCameraImage] = useState('');
  const [cameraVideo, setCameraVideo] = useState('');

  // const Image_Picker = () => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 400,
  //     cropping: true,
  //     // multiple: true,
  //   }).then(image => {
  //     console.log(image.path);
  //     setFilePath(image.path);
  //   });
  // };

  // const MultipleImage = () => {
  //   ImagePicker.openPicker({

  //     cropping: false,
  //     multiple: true,
  //   }).then(image => {
  //     // console.log(image.path);
  //     setMultipleImg(image)
  //   });
  // };

  // const CaremaImage = () => {
  //   ImagePicker.openCamera({
  //     cropping: false,
  //     multiple: true,
  //     mediaType:'image'
  //   }).then(image => {
  //     // console.log(image.path);
  //     setCameraImage(image.path);
  //   });
  // };

  const CameraVideo = () => {
    ImagePicker.openCamera({
      mediaType: 'video',
    })
      .then(video => {
        console.log('video', video);
        setCameraVideo(video.path);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  };

  return (
    <View>
      {/* <View>
        <TouchableOpacity onPress={() => Image_Picker()}>
          <Text>CustomImagePicker</Text>
        </TouchableOpacity>
        <Image style={{width: 200, height: 200}} source={{uri: filePAth}} />
      </View> */}
      {/* <View>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: 'blue',
            paddingVertical: 10,
            marginHorizontal: 50,
            borderRadius: 30,
          }}
          onPress={() => MultipleImage()}>
          <Text style={{fontSize: 20, color: '#fff'}}>Multiple</Text>
        </TouchableOpacity>

        <FlatList
          style={{flexDirection: 'row'}}
          data={multiplaImg}
          renderItem={({item}) => {
            return (
              <Image
                style={{height: 150, width: 150}}
                source={{uri: item.path}}
              />
            );
          }}
        />
      </View> */}
      {/* <View>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: 'blue',
            paddingVertical: 10,
            marginHorizontal: 50,
            borderRadius: 30,
          }}
          onPress={() => CaremaImage()}>
          <Text style={{fontSize: 20, color: '#fff'}}>pick image from camera</Text>
        </TouchableOpacity>
              <Image
                style={{height: 150, width: 150}}
                source={{uri: cameraImage}}
              />
      </View> */}
      <View style={{backgroundColor:'grey', height: 500, flexDirection: 'column'}}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: 'blue',
            paddingVertical: 10,
            marginHorizontal: 50,
            borderRadius: 30,
          }}
          onPress={() => CameraVideo()}>
          <Text style={{fontSize: 20, color: '#fff'}}>video from camera</Text>
        </TouchableOpacity>
        {cameraVideo && (
          <Video
            source={{uri: cameraVideo}}
            ref={ref => {
              this.player = ref;
            }}
            onBuffer={this.onBuffer}
            onError={this.videoError}
            style={styles.backgroundVideo}
          />
        )}
      </View>
    </View>
  );
};

export default CustomImagePicker;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
