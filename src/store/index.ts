import { createStore, Store } from 'redux';

import rootReducer from './rootReducer';
import { ThemesState } from './themes/types';

export interface ApplicationState {
    themes: ThemesState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
