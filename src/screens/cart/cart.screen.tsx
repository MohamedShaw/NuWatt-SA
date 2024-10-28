import {AppHeader, Container} from '@src/components';
import {CartHoc} from '@src/hoc';
import React from 'react';

export const Cart = () => {
  return (
    <>
      <Container>
        <AppHeader title="Shopping Cart" hideBack={false} />
        <CartHoc />
      </Container>
    </>
  );
};
