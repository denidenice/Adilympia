export type HomeScreen = Readonly<{
    type: 'home'
}>

export type EditGameScreen = Readonly<{
    type: 'game'
}>

export type HistoryScreen = Readonly<{
    type: 'history'
}>

export type StatsScreen = Readonly<{
    type: 'stats'
}>

export type ErrorScreen = Readonly<{
    type: 'error'
    message: string
}>

export type AdilympicsScreen = HomeScreen | EditGameScreen | HistoryScreen | StatsScreen | ErrorScreen
