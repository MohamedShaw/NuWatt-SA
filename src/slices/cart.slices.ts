import {createSlice} from '@reduxjs/toolkit';
import {Product} from '@src/models';
import {RootState} from '@src/store';
import {useSelector} from 'react-redux';
export interface ProductCart {
  id: number;
  quantity: number;
  product: Product;
  variant: any;
  cart_total: 0;
}

interface Props {
  cart: ProductCart[];
  isRemoveBottomSheet: boolean;
  currentSelected: any;
  cartObj: {};
  cart_total: 0;
  deliveryAddress: any;
}

const initialState: Props = {
  cart: [],
  isRemoveBottomSheet: false,
  currentSelected: {},
  cartObj: {},
  cart_total: 0,
  deliveryAddress: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const {product, quantity = 1, id} = action.payload;

      let cart = {...state.cartObj};
      let cart_total = state.cart_total + quantity * product.price;

      cart[id] = {product, count: quantity + (cart?.[id]?.count || 0)};

      state.cartObj = cart;
      state.cart_total = cart_total as any;
    },

    removeItem: (state, action) => {
      delete state.cartObj[action.payload.id];
    },
    reset: (state, action) => {
      return initialState;
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const useCart = () => useSelector((state: RootState) => state.cart);

export const {removeItem, addCart, reset} = cartSlice.actions;
