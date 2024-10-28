import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {persistor, store} from './store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {QueryClientProvider} from 'react-query';
import {queryClient} from './utils';
import {NavigatorsContainer} from './navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <SafeAreaProvider>
            <NavigatorsContainer />
            </SafeAreaProvider>
          </QueryClientProvider>
        </Provider>
      </PersistGate>
    </GestureHandlerRootView>
  );
};
