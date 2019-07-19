import React from 'react';

import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';

import thunk from 'redux-thunk';
import Layout from './modules/Layout/Layout.component';
import rootReducer from './store/rootReducer';

// tslint:disable-next-line:no-any
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)
  ));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout isGamestarted={false}/>
    </Provider>
  );
};

export default App;
