import { Reducer } from 'redux';

import { updateObject } from '../../services/shared/store.utility';
import { DarkModeTypes, IDarkModeState } from './types';

const INITAL_STATE: IDarkModeState = {
    isDarkMode: false,
};

const reducer: Reducer<IDarkModeState> = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case DarkModeTypes.SET_DARK_MODE:
            return updateObject(state, {
                isDarkMode: !state.isDarkMode,
            }) as IDarkModeState;
        default:
            return state;
    }
};

export default reducer;
