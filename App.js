import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyApp from './app/myApp'
import { Provider } from 'react-redux'
import store from './app/store'

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <MyApp />
      </Provider>
    </NavigationContainer>
  );
}