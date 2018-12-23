import { Theme } from '@material-ui/core'
import { AdilympicsScreen } from '../screen'

export type AdilympicsState = Readonly<{
    ui: Readonly<{
        theme: Theme
        screen: AdilympicsScreen
    }>
}>
