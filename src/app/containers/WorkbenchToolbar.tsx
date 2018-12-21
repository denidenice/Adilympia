import { connect, Omit } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { ScreenAction, switchToHomeScreen, WorkbenchScreen } from '../../screen'
import WorkbenchToolbar, { Props } from '../components/WorkbenchToolbar'
import { WorkbenchState } from '../../store'

type FromStateProps = Omit<Props, 'onHomeClick'>
type FromDispatchProps = Omit<Props, 'theme'>

const mapStateToProps = (state: WorkbenchState): FromStateProps => {
    return {
        theme: state.ui.theme
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<WorkbenchScreen, {}, ScreenAction>): FromDispatchProps => {
    return {
        onHomeClick: () => dispatch(switchToHomeScreen())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkbenchToolbar)
