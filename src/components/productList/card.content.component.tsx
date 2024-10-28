import React from 'react';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';
export const CardContent = ({uri}) => {
  return (
    <FastImage
      source={{uri}}
      style={styles.imageContainer}
      resizeMode="cover"
    />
  );
};
