import { Reducer } from 'redux';

import { ThemesState, ThemeTypes } from './types';

const INITAL_STATE: ThemesState = {
    theme: '',
};

const reducer: Reducer<ThemesState> = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case ThemeTypes.SET_THEME:
            return { ...state, theme: action.payload.theme };
        default:
            return state;
    }
};

export default reducer;
