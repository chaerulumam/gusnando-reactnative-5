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
      seleksiItem: (
        <View>
          <Text>Hello</Text>
        </View>
      ),
      seleskiItem2: (
        <View>
          <Text>Hello 2</Text>
        </View>
      ),
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
        {this.state.seleksi.nama === 'citra'
          ? this.state.seleksiItem
          : this.state.seleskiItem2}
      </View>
    );
  }
}

export default App;
