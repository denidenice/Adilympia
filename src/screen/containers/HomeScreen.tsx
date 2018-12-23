import { connect } from 'react-redux'
import HomeScreen, { Props } from '../components/HomeScreen'
import { List as ImmutableList } from 'immutable'
import { ThunkDispatch } from 'redux-thunk'
import { ScreenAction, switchToMedicalScreen, switchToMolecularScreen, switchToProceduralScreen } from '../actions'
import { AdilympicsScreen } from '../model'
import { noOp } from '../../util'
import { faDice } from '@fortawesome/free-solid-svg-icons'

const mapDispatchToProps = (dispatch: ThunkDispatch<AdilympicsScreen, {}, ScreenAction>): Props => {
    const cards = ImmutableList.of(
        {
            title: 'New Game',
            icon: faDice,
            onClick: () => dispatch(switchToProceduralScreen())
        },
        {
            title: 'Stats',
            icon: faDice,
            onClick: () => dispatch(switchToProceduralScreen())
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
