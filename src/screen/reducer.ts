import { WorkbenchScreen } from './model'
import { defaultScreen } from './defaults'
import { ScreenAction } from './actions'
import { SWITCH_SCREEN } from './actionTypes'

const reducer = (screen: WorkbenchScreen = defaultScreen, action: ScreenAction): WorkbenchScreen => {
    switch (action.type) {
        case SWITCH_SCREEN: {
            return action.screen
        }
        default:
            return screen
    }
}

export default reducer
