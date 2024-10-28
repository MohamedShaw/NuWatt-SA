import {Dimensions, Platform, StatusBar} from 'react-native';
const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

// 11 pro max
export const designWidth = 375;
export const designHeight = 778;

export const APPBAR_HEIGHT = 54;


const maxScreenWidth = screenWidth < 576 ? screenWidth : 576;

const _scaleWidth = maxScreenWidth / designWidth;
const _scaleHeight = screenHeight / designHeight;
const _scaleText = _scaleWidth;

export const statusBarHeight =
  Platform.OS === 'ios' ? 20 : (StatusBar.currentHeight as number);

const width = (value: number) => value * _scaleWidth;
const animatedWidth = (value: number) => {
  'worklet';
  return value * _scaleWidth;
};

const height = (value: number) => value * _scaleHeight;
const animatedHeight = (value: number) => {
  'worklet';
  return value * _scaleHeight;
};

const fontSize = (value: number) => value * _scaleText;

export {width, height, fontSize, animatedHeight, animatedWidth};
