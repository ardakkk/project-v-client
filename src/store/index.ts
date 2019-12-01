import { applyMiddleware, compose, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { IDarkModeState } from './darkMode/types';
import rootReducer from './rootReducer';

export interface IApplicationState {
    darkMode: IDarkModeState;
}

const composeEnhancers =
    process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null || compose;
const sagaMiddleware = createSagaMiddleware();
const store: Store<IApplicationState> = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

export default store;
