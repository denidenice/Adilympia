import * as React from 'react'
import { Theme } from '@material-ui/core'
import { AdilympicsScreen } from '../../screen'
import ScreenWrapper from '../../screen/components/ScreenWrapper'
import AdilympicsToolbar from '../containers/AdilympicsToolbar'


export type Props = Readonly<{
    theme: Theme
    screen: AdilympicsScreen
}>

const App = ({ theme, screen }: Props) => {
    return (
        <AdilympicsToolbar>
            <ScreenWrapper screen={screen} />
        </AdilympicsToolbar>
    )
}

export default App
