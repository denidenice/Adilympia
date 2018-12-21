import { Theme } from '@material-ui/core'
import { WorkbenchScreen } from '../screen'

export type WorkbenchState = Readonly<{
    ui: Readonly<{
        theme: Theme
        screen: WorkbenchScreen
    }>
}>
