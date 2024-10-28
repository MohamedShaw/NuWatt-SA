import React from 'react';
import {styles} from './styles';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {addCart, removeItem} from '@src/slices/cart.slices';
export const CardFotter = ({price, item, cartScreen}) => {
  const dispatch = useDispatch();
  const onAddToCard = () => {
    const payload = {
      product: {...item, purchasedAt: new Date()},
      quantity: 1,
      id: item.id,
    };

    dispatch(addCart(payload));
  };
  const onRemove = () => {
    const payload = {
      id: item.id,
    };

    dispatch(removeItem(payload));
  };
  return (
    <View style={styles.fotter}>
      {cartScreen ? (
        <TouchableOpacity style={styles.button} onPress={onRemove}>
          <Text style={styles.buyTxt}>Remove</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={onAddToCard}>
          <Text style={styles.buyTxt}>Buy</Text>
        </TouchableOpacity>
      )}

      <Text>Price: {price} </Text>
    </View>
  );
};
