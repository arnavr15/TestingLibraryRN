/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import {
  LMChatClient,
  SyncChatroomRequest,
  SyncConversationRequest,
} from '@likeminds.community/chat-rn';
import notifee, {EventType} from '@notifee/react-native';
import getNotification from './ChatSX/notifications';
import {getRoute} from './ChatSX/notifications/routes';
import * as RootNavigation from './RootNavigation';
import TrackPlayer from 'react-native-track-player';
import {playbackService} from './ChatSX/audio';

console.log('adasdsada');
notifee.onBackgroundEvent(async ({type, detail}) => {
  let routes = getRoute(detail?.notification?.data?.route);

  if (type === EventType.PRESS) {
    if (!!RootNavigation) {
      setTimeout(() => {
        RootNavigation.navigate(routes.route, routes.params); // e.g. navigate(CHATROOM, {chatroomID: 69285});
      }, 1000);
    }
  }
});

console.log('bnassaga');

messaging().setBackgroundMessageHandler(async remoteMessage => {
  let val = await getNotification(remoteMessage);
  return val;
});

console.log('casdsad');

const myClient = LMChatClient.setApiKey('ac68b028-fe9a-45f0-a05e-e950b1cac622')
  .setPlatformCode('rn')
  .setVersionCode(parseInt('19'))
  .build();

function HeadlessCheck({isHeadless}) {
  if (isHeadless) {
    // App has been launched in the background by iOS, ignore
    return null;
  }

  return <App />;
}

AppRegistry.registerComponent(appName, () => HeadlessCheck);
TrackPlayer.registerPlaybackService(() => playbackService);

export {myClient, SyncChatroomRequest, SyncConversationRequest};
