import { SWITCH_SCREEN } from './actionTypes'
import { AdilympicsScreen } from './model'

export type ScreenAction = SwitchScreenAction

export type SwitchScreenAction = Readonly<{
    type: typeof SWITCH_SCREEN
    screen: AdilympicsScreen
}>

export const switchToHomeScreen = (): SwitchScreenAction => {
    return {
        type: SWITCH_SCREEN,
        screen: {
            type: 'home'
        }
    }
}

export const switchToEditGameScreen = (): SwitchScreenAction => {
    return {
        type: SWITCH_SCREEN,
        screen: {
            type: 'game'
        }
    }
}

export const switchToHistoryScreen = (): SwitchScreenAction => {
    return {
        type: SWITCH_SCREEN,
        screen: {
            type: 'history'
        }
    }
}

export const switchToStatsScreen = (): SwitchScreenAction => {
    return {
        type: SWITCH_SCREEN,
        screen: {
            type: 'stats'
        }
    }
}
