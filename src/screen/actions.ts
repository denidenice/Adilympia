import { SWITCH_SCREEN } from './actionTypes'
import { WorkbenchScreen } from './model'

export type ScreenAction = SwitchScreenAction

export type SwitchScreenAction = Readonly<{
    type: typeof SWITCH_SCREEN
    screen: WorkbenchScreen
}>

export const switchToHomeScreen = (): SwitchScreenAction => {
    return {
        type: SWITCH_SCREEN,
        screen: {
            type: 'home'
        }
    }
}

export const switchToProceduralScreen = (): SwitchScreenAction => {
    return {
        type: SWITCH_SCREEN,
        screen: {
            type: 'procedural'
        }
    }
}

export const switchToMedicalScreen = (): SwitchScreenAction => {
    return {
        type: SWITCH_SCREEN,
        screen: {
            type: 'medical'
        }
    }
}

export const switchToMolecularScreen = (): SwitchScreenAction => {
    return {
        type: SWITCH_SCREEN,
        screen: {
            type: 'molecular'
        }
    }
}
