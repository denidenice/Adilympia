import { connect } from 'react-redux'
import HomeScreen, { Props } from '../components/HomeScreen'
import { List as ImmutableList } from 'immutable'
import { ThunkDispatch } from 'redux-thunk'
import { ScreenAction, switchToMedicalScreen, switchToMolecularScreen, switchToProceduralScreen } from '../actions'
import { WorkbenchScreen } from '../model'
import { noOp } from '../../util'
import { faTasks, faUserMd, faDna } from '@fortawesome/free-solid-svg-icons'

const mapDispatchToProps = (dispatch: ThunkDispatch<WorkbenchScreen, {}, ScreenAction>): Props => {
    const cards = ImmutableList.of(
        {
            title: 'New Game',
            icon: faTasks,
            onClick: () => dispatch(switchToProceduralScreen())
        },
        {
            title: 'Stats',
            icon: faTasks,
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
