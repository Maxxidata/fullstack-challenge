import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './modules/rootReducer';
import rootSaga from './modules/rootSagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = compose;

export const store = createStore(
  rootReducers,
  {},
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);