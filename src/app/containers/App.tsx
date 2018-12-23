import { connect } from 'react-redux'
import { AdilympicsState } from '../../store'
import App, { Props } from '../components/App'

const mapStateToProps = (state: AdilympicsState): Props => {
    return state.ui
}

export default connect(mapStateToProps)(App)
