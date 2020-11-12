/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React from 'react';
import {
  Text,
  View, StatusBar
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import AuthRouter from './src/navigator'
import {DefaultTheme, Provider as PaperProvider  } from 'react-native-paper'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fafcff',
    accent : '#ffff'
  },
};

const App = () => {
  return (
    <>
         <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
    <PaperProvider theme={theme}>
        <AuthRouter />
    </PaperProvider>
    </>
  );
};


export default App;
