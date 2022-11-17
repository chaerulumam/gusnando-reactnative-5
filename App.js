import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Header from './src/components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <Text>Ini Home</Text>
      </View>
    );
  }
}

export default App;
