import messaging from '@react-native-firebase/messaging';

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  // console.log('Authorization status(authStatus):', authStatus);
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  console.log('enabled: ', enabled);
  if (enabled) {
    // console.log("Authorization status:",authStatus)
    getFcmToken();
  }
};

async function getFcmToken() {
  let fcmToken = await messaging().getToken();
  console.log('fcmToken:', fcmToken);
}

export const NotificationListener = () => {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });

  messaging().onNotificationOpenedApp(async remoteMessage => {
    if (remoteMessage) {
      console.log(
        'Notification caused app to open from background state',
        remoteMessage.notification,
      );
    }
  });

  messaging()
    .getInitialNotification()
    .then(async remoteMessage => {
      if (remoteMessage) {
        console.log(
          'getInitialNotification:' +
            'Notification caused app to open from quit state',
          remoteMessage.notification,
        );
      }
    });


    messaging().onMessage(
      async (remoteMessage) => {
        alert('A new FCM message arrived!');
        console.log(
          'A new FCM message arrived!',
          JSON.stringify(remoteMessage)
        );
      }
    );
};
