import { connect, Omit } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { ScreenAction, switchToHomeScreen, AdilympicsScreen } from '../../screen'
import AdilympicsToolbar, { Props } from '../components/AdilympicsToolbar'
import { AdilympicsState } from '../../store'

type FromStateProps = Omit<Props, 'onHomeClick'>
type FromDispatchProps = Omit<Props, 'theme'>

const mapStateToProps = (state: AdilympicsState): FromStateProps => {
    return {
        theme: state.ui.theme
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<AdilympicsScreen, {}, ScreenAction>): FromDispatchProps => {
    return {
        onHomeClick: () => dispatch(switchToHomeScreen())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdilympicsToolbar)
