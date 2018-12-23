import theme, { ThemeAction } from '../theme'
import { defaultAdilympicsState, AdilympicsState } from '../store'
import { WorkbenchAction } from './actions'
import screen, { ScreenAction } from '../screen'

export const rootReducer = (state: AdilympicsState = defaultAdilympicsState, action: WorkbenchAction): AdilympicsState => {
    return {
        ui: {
            theme: theme(state.ui.theme, action as ThemeAction),
            screen: screen(state.ui.screen, action as ScreenAction)
        }
    }
}
