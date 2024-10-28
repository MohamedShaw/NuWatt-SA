import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, Screen, screens} from './types.navigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'productList'}
      screenOptions={() => ({
        headerShown: false,
      })}>
      {screens.map((screen: Screen) => (
        <>
          <Stack.Screen
            key={screen.name}
            name={screen.name as keyof RootStackParamList}
            component={screen.component}
          />
        </>
      ))}
    </Stack.Navigator>
  );
};
