import { rootReducer, WorkbenchAction } from '../../app'
import { defaultAdilympicsState } from '../../store'
import { TOGGLE_THEME } from '../../theme/actionTypes'
import { darkTheme, lightTheme, toggleTheme, ToggleThemeAction } from '../../theme'
import { SWITCH_SCREEN } from '../../screen/actionTypes'
import { switchToHomeScreen, switchToMolecularScreen } from '../../screen'

describe('root reducer', () => {
    it('should initially return default state', () => {
        expect(rootReducer(undefined, {} as WorkbenchAction)).toEqual(defaultAdilympicsState)
    })

    it(`should handle ${TOGGLE_THEME} action`, () => {
        const action: ToggleThemeAction = toggleTheme()

        let state = rootReducer(defaultAdilympicsState, action)

        expect(state.ui.theme).toEqual(darkTheme)

        state = rootReducer(state, action)

        expect(state.ui.theme).toEqual(lightTheme)
    })

    it(`should handle ${SWITCH_SCREEN} action`, () => {
        const switchToHomeScreenAction = switchToHomeScreen()
        let state = rootReducer(defaultAdilympicsState, switchToHomeScreenAction)
        expect(state.ui.screen.type).toEqual('home')

        const switchToMolecularScreenAction = switchToMolecularScreen()
        state = rootReducer(state, switchToMolecularScreenAction)
        expect(state.ui.screen.type).toEqual('molecular')
    })
})
