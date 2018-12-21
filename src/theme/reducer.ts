import { Theme } from '@material-ui/core'
import { ThemeAction } from './actions'
import { TOGGLE_THEME } from './actionTypes'
import { darkTheme, lightTheme } from './model'
import { defaultTheme } from './defaults'

const reducer = (state: Theme = defaultTheme, action: ThemeAction): Theme => {
    switch (action.type) {
        case TOGGLE_THEME:
            return state.palette.type === 'light' ? darkTheme : lightTheme
        default:
            return state
    }
}

export default reducer
