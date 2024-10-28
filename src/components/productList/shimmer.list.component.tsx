import React from 'react';
import {FlatList, ViewToken} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import {styles} from './styles';
import {ShimmerItem} from './card.shimmer.component';

const dummyData = new Array(10).fill(0).map((_, index) => ({id: index}));

export const ShimmerList = ({}) => {
  const viewableItems = useSharedValue<ViewToken[]>([]);

  return (
    <FlatList
      data={dummyData}
      contentContainerStyle={styles.listContainer}
      onViewableItemsChanged={({viewableItems: vItems}) => {
        viewableItems.value = vItems;
      }}
      renderItem={({item}) => {
        return <ShimmerItem item={item} viewableItems={viewableItems} />;
      }}
    />
  );
};
