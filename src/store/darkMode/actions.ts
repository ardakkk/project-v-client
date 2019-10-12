import { DarkModeTypes } from './types';

export const setDarkMode = () => {
    return {
        type: DarkModeTypes.SET_DARK_MODE,
    };
};
