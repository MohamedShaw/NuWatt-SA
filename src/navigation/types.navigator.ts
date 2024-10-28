import {Cart, ProductList} from '@src/screens';
import {FunctionComponent} from 'react';

export type RootStackParamList = {
  productList: undefined;
  cart: undefined;
};

export interface Screen {
  name: keyof RootStackParamList;

  component: FunctionComponent<any>;
}

export const screens: Screen[] = [
  {name: 'productList', component: ProductList},
  {name: 'cart', component: Cart},
];
