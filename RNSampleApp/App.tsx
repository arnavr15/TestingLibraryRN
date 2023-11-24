import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MainContainer from './components/navigation';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <MainContainer />
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  );
}

export default App;
