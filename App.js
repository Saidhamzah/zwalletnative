/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Text, View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigator';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import configureStore from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FAFCFF',
    accent: '#ffff',
  },
};

const App = () => {
  const {store, persistor} = configureStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        
        <PaperProvider theme={theme}>
          <MainNavigator />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
