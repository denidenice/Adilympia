import * as React from 'react'
import { Theme } from '@material-ui/core'
import { WorkbenchScreen } from '../../screen'
import ScreenWrapper from '../../screen/components/ScreenWrapper'
import WorkbenchToolbar from '../containers/WorkbenchToolbar'

export type Props = Readonly<{
    theme: Theme
    screen: WorkbenchScreen
}>

const App = ({ theme, screen }: Props) => {
    return (
        <WorkbenchToolbar>
            <ScreenWrapper screen={screen} />
        </WorkbenchToolbar>
    )
}

export default App
