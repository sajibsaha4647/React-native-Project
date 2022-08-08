import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import store from './src/Redux/Store';
import {Provider} from 'react-redux';
import Navigation from './src/Navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <Navigation />
      </View>
    </Provider>
  );
};

export default App;
