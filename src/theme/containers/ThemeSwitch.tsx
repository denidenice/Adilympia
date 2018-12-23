import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import ThemeSwitch from '../components/ThemeSwitch'
import { Theme } from '@material-ui/core'
import { ThemeAction } from '../actions'
import { toggleTheme } from '../index'
import { AdilympicsState } from '../../store'

type FromStateProps = Readonly<{
    theme: Theme
}>

type FromDispatchProps = Readonly<{
    onToggleTheme: () => void
}>

const mapStateToProps = (state: AdilympicsState): FromStateProps => {
    return { theme: state.ui.theme }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<Theme, {}, ThemeAction>): FromDispatchProps => {
    return {
        onToggleTheme: () => dispatch(toggleTheme())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ThemeSwitch)
