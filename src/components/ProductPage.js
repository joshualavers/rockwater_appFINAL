import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, Text } from 'react-native';
import Spinner from 'react-native-number-spinner';
import { ListItem } from 'react-native-elements';
import { valueChanged } from '../actions';
// import { CardSection } from './common';

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
			console.log('i.NAME: ', i.ProductName);
			productsArray.push(this.props.products[i].ProductName);
      // you can reference objects using arrays as well,
			// i.e. this.props['products'] = this.props.products,
		}
		this.setState({ productsArray }); // ES6 shorthand, aka equal to productsArray: productsArray
		console.log('Products array: ', productsArray);
	}

  onValueChange(value) {
    this.props.valueChanged(value);
  }


  render() {
    console.log('THIS.PROPS(ProductPage): ', this.props);
    console.log('PRODUCT NAME: ', this.props.ProductName);
    console.log('NAME: ', this.props.Name);
    console.log('VALUE: ', this.props.values);
    return (
      <View style={{ flex: 1, paddingTop: 60 }}>
				{/* quick test, your text was rendered under the header*/}
				<FlatList
					style={{ flex: 1 }}
					extraData={this.state.productsArray} // when this value changes FlatList re-renders
					data={this.state.productsArray}
					keyExtractor={(item, index) => index}
					renderItem={({ item }) => {
            return (
              <ListItem
              hideChevron
              titleNumberOfLines={2}
              title={
                <View style={{ flexDirection: 'row', flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 12,
                      flex: 0.8,
                      paddingTop: 10,
                      justifyContent: 'center' }}
                  >{item}</Text>
                  <View style={{ flex: 0.2, paddingRight: 10 }}>
                    <Spinner
                      min={0}
                      max={99}
                      width={80}
                      height={30}
                      default={0}
                      onNumChange={this.onValueChange.bind(this)}
                      value={this.props.values}
                    />
                  </View>
                </View>
              }

              /*{
                <View>
                  <Picker>
                    <Picker.Item
                    label="1"
                    value="1"
                    />
                    <Picker.Item
                    label="2"
                    value="2"
                    />
                    <Picker.Item
                    label="3"
                    value="3"
                    />
                    <Picker.Item
                    label="4"
                    value="4"
                    />
                    <Picker.Item
                    label="5"
                    value="5"
                    />
                    <Picker.Item
                    label="6"
                    value="6"
                    />
                  </Picker>
                </View>
              } */
              />
						);
					}}
				/>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { users, products } = state;
  return { products: users.Products, values: products.value };
};
export default connect(mapStateToProps, { valueChanged })(ProductPage);
