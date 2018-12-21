import DarkThemeIcon from '@material-ui/icons/Brightness2'
import LightThemeIcon from '@material-ui/icons/WbSunny'
import * as React from 'react'
import { Switch, Theme } from '@material-ui/core'
import { darkTheme } from '../model'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        alignItems: 'center'
    },
    icon: {
        margin: theme.spacing.unit
    }
}))

type Props = Readonly<{
    theme: Theme
    onToggleTheme: () => void
}>

const ThemeSwitch = ({ theme, onToggleTheme }: Props) => {
    const classes = useStyles(theme)
    return (
        <div className={classes.root}>
            <LightThemeIcon className={classes.icon} />
            <Switch checked={theme === darkTheme} onChange={onToggleTheme} color={'default'} />
            <DarkThemeIcon className={classes.icon} />
        </div>
    )
}

export default ThemeSwitch
