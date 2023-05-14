import React, {Fragment} from 'react';
//import {Provider} from 'react-redux';
//import {PersistGate} from 'redux-persist/integration/react';
import AppNavigator from './navigation/AppNavigator';
//import {store, persistor} from './redux';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <Fragment>
      <AppNavigator />
      <FlashMessage position="top" />
    </Fragment>
  );
};

export default App;
