import {Platform, Dimensions} from 'react-native';

const systemOS = Platform.OS;

const {width, height} = Dimensions.get('window');

const System = {
  os: systemOS,
  isOs: systemOS === 'ios',
  isAndroid: systemOS === 'android',
  isIOS: systemOS === 'ios',
  windowHeight: height,
  windowWidth: width,
} as const;

export default System;
