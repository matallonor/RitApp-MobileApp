/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import BackgroundVideo from './BackgroundVideo'

export default class StreamVideo extends Component<{}> {
  render() {
    return (
      <View>
        <BackgroundVideo />
        <Text style={styles.appMessage}>
            RitApp
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  appMessage: {
    fontSize: 48,
    color: '#336699',
    justifyContent: 'center',
    alignItems: 'center',
  }
});