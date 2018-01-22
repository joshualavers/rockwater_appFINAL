import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ProductPage extends Component {

  render() {
    console.log('THIS.PROPS: ', this.props);
    return (
      <View>
        <Text>Product Page</Text>
      </View>
    );
  }
}

export default ProductPage;
