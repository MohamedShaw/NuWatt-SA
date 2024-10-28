import {AppHeader, List, ShimmerList} from '@src/components';
import {useProduct} from '@src/hooks';
import {reset, useCart} from '@src/slices/cart.slices';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '@src/navigation';

export const ProductListHoc = () => {
  const {data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage} =
    useProduct();

  const cart = useCart();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const dispatch =useDispatch()
  useEffect(()=>{
    dispatch(reset())
  },[])
  return (
    <>
      <AppHeader
        hideBack
        title="Product List"
        rightItem={
          cart?.cartObj ? (
            <TouchableOpacity
              style={{width: 40, height: 30}}
              onPress={() => {
                navigation.navigate('cart');
              }}>
              <FastImage
                source={require('@src/assets/imgs/shopping-cart.png')}
                resizeMode="contain"
                style={{width: 40, height: 30}}
              />
            </TouchableOpacity>
          ) : (
            <></>
          )
        }
      />

      {isLoading ? (
        <ShimmerList />
      ) : (
        <List
          data={
            new Array(data?.length)
              .fill(0)
              .map((_, index) => ({...data?.[index]!!, id: index})) as any
          }
          isLoading={isLoading}
          hasMore={hasNextPage!!}
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      )}
    </>
  );
};
