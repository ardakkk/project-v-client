import { createStore, Store } from 'redux';

import { IDarkModeState } from './darkMode/types';
import rootReducer from './rootReducer';

export interface IApplicationState {
    darkMode: IDarkModeState;
}

const store: Store<IApplicationState> = createStore(rootReducer);

export default store;
