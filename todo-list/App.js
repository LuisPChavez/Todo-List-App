/*
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text> Hello</Text>
      </View>
    );
  }
}
*/


import React from 'react';
import { registerRootComponent } from 'expo';
import Header from './src/components/header';

const App = () => (
  <Header />
);

// These two lines are the same as the bottom two lines in the udemy course
export default App;
registerRootComponent(App);

