import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          nama: 'citra',
          umur: 23,
        },
        {
          nama: 'umem',
          umur: 26,
        },
        {
          nama: 'udin',
          umur: 23,
        },
      ],

      seleksi: [],
    };
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={({index, item}) => (
            <TouchableOpacity onPress={() => this.setState({seleksi: item})}>
              <Text
                style={{color: this.state.seleksi == item ? 'red' : 'blue'}}>
                {item.nama}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.nama}
        />
      </View>
    );
  }
}

export default App;
