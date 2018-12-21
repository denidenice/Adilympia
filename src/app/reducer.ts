import theme, { ThemeAction } from '../theme'
import { defaultWorkbenchState, WorkbenchState } from '../store'
import { WorkbenchAction } from './actions'
import screen, { ScreenAction } from '../screen'

export const rootReducer = (state: WorkbenchState = defaultWorkbenchState, action: WorkbenchAction): WorkbenchState => {
    return {
        ui: {
            theme: theme(state.ui.theme, action as ThemeAction),
            screen: screen(state.ui.screen, action as ScreenAction)
        }
    }
}
