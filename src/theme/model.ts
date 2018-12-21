import createMuiTheme, { Theme } from '@material-ui/core/styles/createMuiTheme'
import { ComponentsProps } from '@material-ui/core/styles/props'
import { TypographyOptions } from '@material-ui/core/styles/createTypography'

const props: ComponentsProps = {
    MuiGrid: {
        spacing: 8
    }
}

const typography: TypographyOptions = {
    useNextVariants: true
}

export const lightTheme: Theme = createMuiTheme({
    palette: {
        type: 'light'
    },
    props,
    typography
})

export const darkTheme: Theme = createMuiTheme({
    palette: {
        type: 'dark'
    },
    props,
    typography
})
