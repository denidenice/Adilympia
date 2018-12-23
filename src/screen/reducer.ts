import { AdilympicsScreen } from './model'
import { defaultScreen } from './defaults'
import { ScreenAction } from './actions'
import { SWITCH_SCREEN } from './actionTypes'

const reducer = (screen: AdilympicsScreen = defaultScreen, action: ScreenAction): AdilympicsScreen => {
    switch (action.type) {
        case SWITCH_SCREEN: {
            return action.screen
        }
        default:
            return screen
    }
}

export default reducer
