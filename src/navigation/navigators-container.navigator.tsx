import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';

import {enableScreens} from 'react-native-screens';

import {RootNavigator} from './root.navigator';

enableScreens();

export const NavigatorsContainer: FC = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};
