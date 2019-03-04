import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../sagas";



const sagaMiddleware = createSagaMiddleware();


const logger = store => next => action => {
  console.log(action);
  next(action);
};

export const storeFactory = () => {
  const store = applyMiddleware(logger, sagaMiddleware)(createStore)(reducer, {});
  sagaMiddleware.run(rootSaga);
  return store;
};
