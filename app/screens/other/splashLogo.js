import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Image} from 'react-native';
import {
  RkText,
} from 'react-native-ui-kitten';
import { KittenTheme } from '../../config/theme';

import logoImg from '../../assets/images/logo.png';

export default class SplashLogo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logoImg} style={styles.image} />
        <View style={styles.textView}>
          <RkText rkType='logo' style={styles.appName}>Travel Buk</RkText>
          <RkText rkType='light' style={styles.hero}>Travel & Tours</RkText>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  textView: {
    alignItems: 'center',
  },
  hero: {
    fontSize: 35,
    color: KittenTheme.colors.accent,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  appName: {
    fontSize: 60,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
});