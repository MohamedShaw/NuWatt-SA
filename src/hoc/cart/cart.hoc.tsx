import {List} from '@src/components';
import {useCart} from '@src/slices/cart.slices';
import React, {useMemo} from 'react';

export const CartHoc = () => {
  const cart = useCart();
  const lastTwoDaysProduct = useMemo(() => {
    const expiredDate = new Date();
    expiredDate.setDate(expiredDate.getDate() - 2);

    return Object.values(cart.cartObj).filter(product => {
      if (new Date(product?.product?.purchasedAt) > expiredDate) {
        return {...product};
      }
    });
  }, [cart]);

  return (
    <List
      data={
        new Array(lastTwoDaysProduct?.length).fill(0).map((_, index) => ({
          ...lastTwoDaysProduct?.[index].product!!,
          id: index,
        })) as any
      }
      cartScreen
    />
  );
};
