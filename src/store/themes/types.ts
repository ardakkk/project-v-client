/**
 * Action type
 */
export enum ThemeTypes {
    SET_THEME = '@themes/SET_THEME',
}

/**
 * State type
 */
export interface ThemesState {
    theme: string;
}
