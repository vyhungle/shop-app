import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import {appColor} from '../../../assets/color';

import {VIE} from '../../../assets/language';

const {width, height} = Dimensions.get('window');

export default function contentTop() {
  return (
    <View style={styles.Container}>
      <Image source={require('../../../assets/images/logoLogin.png')} />
      <View style={styles.BoxBottom}>
        <Text style={styles.Title}>{VIE.login.title}</Text>
        <Text style={styles.Hint}>{VIE.login.body}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: width,
    height: height / 3,
    zIndex: 10,
    opacity: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BoxBottom: {
    width: width,
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 20,
  },
  Title: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
  },
  Hint: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: appColor.hint,
    marginTop: 10,
  },
});
