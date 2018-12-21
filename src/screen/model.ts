export type HomeScreen = Readonly<{
    type: 'home'
}>

export type ProceduralScreen = Readonly<{
    type: 'procedural'
}>

export type MedicalScreen = Readonly<{
    type: 'medical'
}>

export type MolecularScreen = Readonly<{
    type: 'molecular'
}>

export type ErrorScreen = Readonly<{
    type: 'error'
    message: string
}>

export type WorkbenchScreen = HomeScreen | ProceduralScreen | MedicalScreen | MolecularScreen | ErrorScreen
