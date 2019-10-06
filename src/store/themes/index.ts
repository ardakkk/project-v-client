import { Reducer } from 'redux';

import { DarkModeTypes, IDarkModeState } from './types';

const INITAL_STATE: IDarkModeState = {
    theme: '',
};

const reducer: Reducer<IDarkModeState> = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case DarkModeTypes.SET_DARK_MODE:
            return { ...state, theme: action.payload.theme };
        default:
            return state;
    }
};

export default reducer;
