/**
 * Action type
 */
export enum DarkModeTypes {
    SET_DARK_MODE = '@themes/SET_DARK_MODE',
}

/**
 * State type
 */
export interface IDarkModeState {
    isDarkMode: boolean;
}
