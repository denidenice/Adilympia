import * as React from 'react'
import * as ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './install-material-ui-styles'
import { Provider } from 'react-redux'
import { App } from './app'
import createWorkbenchStore from './store/store'

/* ·················································································································· */
/*  Redux Store                                                                                                       */
/* ·················································································································· */

const store = createWorkbenchStore()

/* ·················································································································· */
/*  Main Render                                                                                                       */
/* ·················································································································· */

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
)

registerServiceWorker()
