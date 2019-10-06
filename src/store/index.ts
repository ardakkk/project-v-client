import { createStore, Store } from 'redux';

import rootReducer from './rootReducer';
import { IDarkModeState } from './themes/types';

export interface IApplicationState {
    themes: IDarkModeState;
}

const store: Store<IApplicationState> = createStore(rootReducer);

export default store;
