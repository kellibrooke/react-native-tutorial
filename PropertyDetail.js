'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
  NavigatorIOS
} from 'react-native';

export default class PropertyDetail extends Component<{}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text  style={styles.description}>{this.props.selectedListing.summary}</Text>
    )
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
});
