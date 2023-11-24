/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {initMyClient} from './ChatSX/setup';

const myClient = initMyClient('ac68b028-fe9a-45f0-a05e-e950b1cac622');

AppRegistry.registerComponent(appName, () => App);

export {myClient};
