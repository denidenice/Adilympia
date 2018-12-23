import { connect } from 'react-redux'
import HomeScreen, { Props } from '../components/HomeScreen'
import { List as ImmutableList } from 'immutable'
import { ThunkDispatch } from 'redux-thunk'
import { ScreenAction, switchToHistoryScreen, switchToStatsScreen, switchToEditGameScreen } from '../actions'
import { AdilympicsScreen } from '../model'
import { noOp } from '../../util'
import { faDice, faAlignLeft, faBook } from '@fortawesome/free-solid-svg-icons'

const mapDispatchToProps = (dispatch: ThunkDispatch<AdilympicsScreen, {}, ScreenAction>): Props => {
    const cards = ImmutableList.of(
        {
            title: 'New Game',
            icon: faDice,
            onClick: () => dispatch(switchToEditGameScreen())
        },
        {
            title: 'Stats',
            icon: faAlignLeft,
            onClick: () => dispatch(switchToStatsScreen())
        },    {
            title: 'History',
            icon: faBook,
            onClick: () => dispatch(switchToHistoryScreen())
        }
    )
    return {
        cards
    }
}

export default connect(
    noOp,
    mapDispatchToProps
)(HomeScreen)
