import React from 'react';
import {View, ViewToken} from 'react-native';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {ShimmerPlaceholder} from '@src/utils';
import {styles} from './styles';

type ListItemProps = {
  item: any;
  viewableItems: Animated.SharedValue<ViewToken[]>;
};

export const ShimmerItem: React.FC<ListItemProps> = React.memo(
  ({item, viewableItems}) => {
    const rStyle = useAnimatedStyle(() => {
      const isVisible = Boolean(
        viewableItems.value
          .filter(item => item.isViewable)
          .find(viewableItem => viewableItem.item.id === item.id),
      );

      return {
        opacity: withTiming(isVisible ? 1 : 0),
        transform: [
          {
            scale: withTiming(isVisible ? 1 : 0.6),
          },
        ],
      };
    }, []);

    return (
      <Animated.View style={[styles.listItem, rStyle]}>
        <ShimmerPlaceholder style={styles.imageContainer} />

        <View style={styles.fotter}>
          <ShimmerPlaceholder style={styles.button} />
          <ShimmerPlaceholder style={styles.shimmerTxt} />
        </View>

        <View style={styles.header}>
          <ShimmerPlaceholder />
        </View>
      </Animated.View>
    );
  },
);
