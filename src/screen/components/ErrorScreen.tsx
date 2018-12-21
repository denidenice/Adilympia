import * as React from 'react'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { makeStyles, useTheme } from '@material-ui/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Theme, Typography } from '@material-ui/core'
import pink from '@material-ui/core/colors/pink'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'grid',
        gridTemplateColumns: 'auto',
        gridTemplateRows: '60% auto',
        gridRowGap: `${2 * theme.spacing.unit}px`,
        justifyItems: 'center',
        alignItems: 'center'
    },
    icon: {
        fontSize: theme.typography.h1.fontSize,
        color: pink[800]
    },
    title: {
        color: theme.palette.text.primary
    },
    message: {
        color: theme.palette.text.secondary
    }
}))

type Props = Readonly<{
    message: string
}>

const ErrorScreen = ({ message }: Props) => {
    const classes = useStyles(useTheme)
    return (
        <div className={classes.root}>
            <FontAwesomeIcon className={classes.icon} icon={faExclamationTriangle} />
            <Typography className={classes.title} variant="h3">
                Oops
            </Typography>
            <Typography className={classes.message} variant="body1">
                {message}
            </Typography>
        </div>
    )
}

export default ErrorScreen
