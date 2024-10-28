import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Container = props => {
  return (
    <SafeAreaView style={{alignSelf: 'stretch', flex: 1}} >
      {props.children}
    </SafeAreaView>
  );
};
