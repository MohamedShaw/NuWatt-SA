import React, {useMemo, useRef} from 'react';
import {
  Alert,
  FlatList,
  LayoutAnimation,
  RefreshControl,
  View,
  ViewToken,
} from 'react-native';
import {ListItem} from './product.card.component';
import {useSharedValue} from 'react-native-reanimated';
import {styles} from './styles';
import {ShimmerItem} from './card.shimmer.component';
import {Product} from '@src/models';

const dummyData = new Array(10).fill(0).map((_, index) => ({id: index}));

interface Props {
  data: Product[];
  isLoading?: boolean;
  hasMore?: boolean;
  fetchNextPage?: any;
  isFetchingNextPage?: boolean;
  cartScreen?: boolean;
}
export const List = React.memo(
  ({
    data,
    isLoading,
    hasMore,
    fetchNextPage,
    isFetchingNextPage,
    cartScreen = false,
  }: Props) => {
    const viewableItems = useSharedValue<ViewToken[]>([]);

    return (
      <FlatList
        data={data}
        contentContainerStyle={styles.listContainer}
        onViewableItemsChanged={({viewableItems: vItems}) => {
          viewableItems.value = vItems;
        }}
        keyExtractor={item => item?.id?.toString()}
        renderItem={({item}) => {
          return (
            <ListItem
              item={ item}
              viewableItems={viewableItems}
              cartScreen={cartScreen}
            />
          );
        }}
        ListFooterComponent={
          isFetchingNextPage
            ? () => {
                return (
                  <>
                    {dummyData.map(item => (
                      <ShimmerItem item={item} viewableItems={viewableItems} />
                    ))}
                  </>
                );
              }
            : null
        }
        onEndReached={() => {
          if (data?.length && !isLoading && hasMore) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.5}
        removeClippedSubviews={true}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={100}
        initialNumToRender={10}
        windowSize={11}
      />
    );
  },
);
