import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, Text } from 'react-native';

class ProductPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			productsArray: [],
		};
	}


	componentWillMount() {
		const productsArray = [];
		for (var i in this.props.products) {
			console.log('this should be the key: ', i);
			console.log('i.NAME: ', i.ProductName)
			productsArray.push(this.props.products[i].ProductName); // you can reference objects using arrays as well,
																															// i.e. this.props['products'] = this.props.products,
		}
		this.setState({ productsArray }); // ES6 shorthand, aka equal to productsArray: productsArray
		console.log('Products array: ', productsArray);
	}


  render() {
    console.log('THIS.PROPS(ProductPage): ', this.props);
    console.log('PRODUCT NAME: ', this.props.ProductName);
    console.log('NAME: ', this.props.Name);
    return (
      <View style={{ flex: 1, paddingTop: 80 }}>
				{/* quick test, your text was rendered under the header*/}
				<FlatList
					style={{ flex: 1 }}
					extraData={this.state.productsArray} // when this value changes FlatList re-renders
					data={this.state.productsArray}
					keyExtractor={(item, index) => index}
					renderItem={({ item }) => {
						return (
							<Text>{item}</Text>
						);
					}}
				/>
        <Text>Product Page</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { users } = state;
  return { products: users.Products };
};
export default connect(mapStateToProps, {})(ProductPage);
