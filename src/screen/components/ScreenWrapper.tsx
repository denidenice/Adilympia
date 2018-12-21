import { WorkbenchScreen } from '../model'
import * as React from 'react'
import ErrorScreen from './ErrorScreen'
import HomeScreen from '../containers/HomeScreen'

type Props = Readonly<{
    screen: WorkbenchScreen
}>

const ScreenWrapper = ({ screen }: Props) => {
    switch (screen.type) {
        case 'home':
            return <HomeScreen />
        case 'error':
            return <ErrorScreen message={screen.message} />
        default:
            return <ErrorScreen message={'Missing screen implementation'} />
    }
}

export default ScreenWrapper
