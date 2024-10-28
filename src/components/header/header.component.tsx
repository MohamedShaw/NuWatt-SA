import React, {ReactElement} from 'react';
import {View, ViewStyle, StyleProp, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '@src/navigation';
import {ArrowBack} from '@src/assets';
import {styles} from './styles';
import {ElevationStyle} from '@src/utils';

interface Props {
  title?: string;
  hideBack?: boolean;
  rightItem?: ReactElement;
  leftItem?: ReactElement;
  onBackPress?: () => void;
  withBorder?: boolean;
  customTitle?: ReactElement;
  noElevation?: boolean;
  style?: ViewStyle | ViewStyle[] | StyleProp<ViewStyle>;
  safeArea?: boolean;
}

export const AppHeader = (props: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {
    title,
    hideBack,
    rightItem,
    leftItem,
    onBackPress = () => {
      navigation.pop();
    },
    customTitle,
    style,
    safeArea = false,
  } = props;
  const SafreArea = safeArea ? SafeAreaView : View;
  return (
    <>
      <SafreArea
        style={[{alignSelf: 'stretch', backgroundColor: '#F9FAFD'}]}
        edges={['top']}>
        <View style={styles.backgreoundColor}>
          <View style={[styles.container, styles.backgreoundColor, style]}>
            <View style={[styles.items, styles.left]}>
              {!hideBack && (
                <TouchableOpacity onPress={onBackPress}>
                  <ArrowBack />
                </TouchableOpacity>
              )}
              {leftItem && <>{leftItem}</>}
            </View>

            <View style={[styles.content, styles.items]}>
              <Text numberOfLines={1} style={[styles.title]}>
                {title}
              </Text>
              {customTitle}
            </View>

            <View style={[styles.items, styles.right]}>{rightItem}</View>
          </View>

          <View
            style={[
              {alignSelf: 'stretch', height: 1, backgroundColor: '#FBFCFF'},
              ElevationStyle,
            ]}
          />
        </View>
      </SafreArea>
    </>
  );
};
