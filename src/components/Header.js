import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" backgroundColor={'crimson'} />
        <View
          style={{
            backgroundColor: 'crimson',
            paddingVertical: 15,
            paddingHorizontal: 20,
            elevation: 2,
          }}>
          <Text style={{color: '#fff'}}>Ini Header Folder Component</Text>
        </View>
      </View>
    );
  }
}

export default Header;
