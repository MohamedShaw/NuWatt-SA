import React from 'react';
import {styles} from './styles';
import {Text, View} from 'react-native';
export const CardHeader = ({title}) => {
  return (
    <View
      style={styles.header}>
      <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
        {title}
      </Text>
    </View>
  );
};
