import { connect } from 'react-redux'
import { WorkbenchState } from '../../store'
import App, { Props } from '../components/App'

const mapStateToProps = (state: WorkbenchState): Props => {
    return state.ui
}

export default connect(mapStateToProps)(App)
