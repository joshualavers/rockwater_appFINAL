import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class ProductPage extends Component {

  render() {
    console.log('THIS.PROPS(ProductPage): ', this.props);
    console.log('PRODUCT NAME: ', this.props.ProductName);
    console.log('NAME: ', this.props.Name);
    return (
      <View>
        <Text>Product Page</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { users } = state;
  return { ProductName: users.ProductName, Name: users.Name };
};
export default connect(mapStateToProps, {})(ProductPage);
