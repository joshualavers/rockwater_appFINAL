import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card } from './common';
import { userFetch } from '../actions';

class WelcomePage extends Component {
  componentWillMount() {
    this.props.userFetch();
  }

  render() {
    console.log(this.props);
    return (
      <Card style={styles.cardStyle}>
          <Text style={styles.textStyle}>Welcome!</Text>
      </Card>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 24,
    color: '#000'
  },
  cardStyle: {
    paddingTop: 333,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

const mapStateToProps = state => {
  const users = _.map(state.users, (val, uid) => {
    return { ...val, uid };
  });
  return { users };
};

export default connect(mapStateToProps, { userFetch })(WelcomePage);
