import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { GlobalStyle } from './theme/global';

import Routes from './routes/routes';
import { store, persistor } from './store';
import history from '~/services/history';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <GlobalStyle />
          <ToastContainer />
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
