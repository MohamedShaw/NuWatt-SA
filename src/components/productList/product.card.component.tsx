import React, {useEffect, useMemo} from 'react';
import {StyleSheet, ViewToken} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {CardHeader} from './card.header.component';
import {CardContent} from './card.content.component';
import {CardFotter} from './card.footer.component';
import {Product} from '@src/models';

type ListItemProps = {
  viewableItems: Animated.SharedValue<ViewToken[]>;
  item: Product;
  cartScreen?:boolean

};

export const ListItem: React.FC<ListItemProps> = React.memo(
  ({item, viewableItems, cartScreen}) => {
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
      <Animated.View style={[styles.listItem, rStyle]} key={item.id}>
        <CardContent uri={item?.images?.[0]} />
        <CardFotter price={item.price} item={item} cartScreen={cartScreen}/>
        <CardHeader title={item.title} />
      </Animated.View>
    );
  },
);

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 15,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.3,
    backgroundColor: 'white',
    height: 240,
  },
});
