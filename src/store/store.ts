import { applyMiddleware, createStore, Store } from 'redux'
import thunk from 'redux-thunk'
import { AdilympicsState } from './model'
import { defaultAdilympicsState } from './defaults'
import { rootReducer, WorkbenchAction } from '../app'

const createWorkbenchStore = (): Store<AdilympicsState, WorkbenchAction> => {
    const middleware = applyMiddleware(thunk)
    return createStore(rootReducer, defaultAdilympicsState, middleware)
}

export default createWorkbenchStore
