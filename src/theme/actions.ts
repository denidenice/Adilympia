import { TOGGLE_THEME } from './actionTypes'

export type ThemeAction = ToggleThemeAction

export type ToggleThemeAction = Readonly<{
    type: typeof TOGGLE_THEME
}>

export const toggleTheme = (): ToggleThemeAction => {
    return {
        type: TOGGLE_THEME
    }
}
