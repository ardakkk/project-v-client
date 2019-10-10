import { DarkModeTypes } from './types';

export const setDarkMode = (isDarkMode: boolean) => {
    return {
        type: DarkModeTypes.SET_DARK_MODE,
        isDarkMode,
    };
};
