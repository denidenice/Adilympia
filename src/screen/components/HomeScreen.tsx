import * as React from 'react'
import { makeStyles, useTheme } from '@material-ui/styles'
import { Card, CardContent, Theme, Typography } from '@material-ui/core'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { List as ImmutableList } from 'immutable'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import pink from '@material-ui/core/colors/pink'
import {lightBlue} from "@material-ui/core/es/colors";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto'
    },
    card: {
        margin: theme.spacing.unit,
        height: '40vh',
        cursor: 'pointer'
    },
    cardTitle: {
        color: theme.palette.text.primary
    },
    cardContent: {
        display: 'grid',
        height: '100%',
        gridTemplateRows: '60% auto',
        justifyItems: 'center',
        alignItems: 'center'
    },
    icon: {
        fontSize: theme.typography.h1.fontSize,
        color: lightBlue[800]
    }
}))

export type CardConfig = Readonly<{
    title: string
    icon: IconProp
    onClick: () => void
}>

export type Props = Readonly<{
    cards: ImmutableList<CardConfig>
}>

type State = CardConfig | 'none'

const HomeScreen = ({ cards }: Props) => {
    const classes = useStyles(useTheme)
    const [raisedCard, setRaisedCard] = useState<State>('none')
    const onMouseEnter = (card: CardConfig) => () => setRaisedCard(card)
    const onMouseLeave = () => setRaisedCard('none')
    return (
        <div className={classes.root}>
            {cards.map((card: CardConfig, index: number) => {
                return (
                    <div key={index}>
                        <Card className={classes.card} raised={raisedCard === card}>
                            <CardContent
                                className={classes.cardContent}
                                onClick={card.onClick}
                                onMouseEnter={onMouseEnter(card)}
                                onMouseLeave={onMouseLeave}
                            >
                                <FontAwesomeIcon className={classes.icon} icon={card.icon} />
                                <Typography className={classes.cardTitle} variant="h3">
                                    {card.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                )
            })}
        </div>
    )
}

export default HomeScreen
