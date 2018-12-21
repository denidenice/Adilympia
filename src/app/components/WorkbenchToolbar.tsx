import * as React from 'react'
import { ReactNode } from 'react'

import AppBar from '@material-ui/core/AppBar/AppBar'
import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import { IconButton, Theme } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline'
import Typography from '@material-ui/core/Typography/Typography'
import { ThemeSwitch } from '../../theme'
import { makeStyles, ThemeProvider, useTheme } from '@material-ui/styles'
import HomeIcon from '@material-ui/icons/Home'

const pagePadding = 8

const useStyles = makeStyles((theme: Theme) => ({
    toolbar: {
        display: 'grid',
        gridTemplateColumns: 'auto auto', // left/right (center is not part of flow)
        paddingLeft: pagePadding,
        paddingRight: pagePadding,
        color: theme.palette.common.black,
        background: theme.palette.background.paper
    },
    toolbarCenter: {
        // position centered on page (rather than in flow of toolbar items)
        position: 'absolute',
        width: '100%',
        display: 'grid',
        pointerEvents: 'none'
    },
    title: {
        justifySelf: 'center',
        color: theme.palette.text.primary
    },
    toolbarLeft: {
        height: '100%',
        marginRight: 'auto', // push to the left
        display: 'grid',
        gridTemplateColumns: 'auto',
        alignItems: 'center'
    },
    toolbarRight: {
        height: '100%',
        marginLeft: 'auto', // push to the right
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        alignItems: 'center'
    },
    content: {
        height: '100vh',
        width: '100vw',
        paddingTop: 64 + pagePadding + 'px', // account for toolbar height
        paddingLeft: pagePadding,
        paddingRight: pagePadding,
        paddingBottom: pagePadding,
        display: 'grid',
        alignItems: 'center'
    }
}))

export type Props = Readonly<{
    theme: Theme
}> &
    ThemedAppProps

const WorkbenchToolbar = ({ theme, onHomeClick, children }: Props) => {
    return (
        // This is the only place we need to access the theme via our own model
        // From here on, it is safe and convenient to use the `useTheme` hook
        <ThemeProvider theme={theme}>
            <ThemedApp children={children} onHomeClick={onHomeClick} />
        </ThemeProvider>
    )
}

type ThemedAppProps = Readonly<{
    onHomeClick: () => void
    children?: ReactNode
}>

const ThemedApp = ({ onHomeClick, children }: ThemedAppProps) => {
    const classes = useStyles(useTheme)
    return (
        <div>
            <CssBaseline />
            <AppBar>
                <Toolbar className={classes.toolbar}>
                    <ToolbarLeft onHomeClick={onHomeClick} />
                    <ToolbarCenter />
                    <ToolbarRight />
                </Toolbar>
            </AppBar>
            <div className={classes.content}>{children}</div>
        </div>
    )
}

const ToolbarLeft = ({ onHomeClick }: Pick<Props, 'onHomeClick'>) => {
    const classes = useStyles(useTheme)
    return (
        <div className={classes.toolbarLeft}>
            <IconButton color="inherit" onClick={onHomeClick}>
                <HomeIcon onClick={onHomeClick} />
            </IconButton>
        </div>
    )
}

const ToolbarCenter = () => {
    const classes = useStyles(useTheme)
    return (
        <div className={classes.toolbarCenter}>
            <Typography className={classes.title} variant="h6">
                 Adilympics {process.env.REACT_APP_VERSION}
            </Typography>
        </div>
    )
}

const ToolbarRight = () => {
    const classes = useStyles(useTheme)
    return (
        <div className={classes.toolbarRight}>
            <ThemeSwitch />
        </div>
    )
}

export default WorkbenchToolbar
