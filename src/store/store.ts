import { applyMiddleware, createStore, Store } from 'redux'
import thunk from 'redux-thunk'
import { WorkbenchState } from './model'
import { defaultWorkbenchState } from './defaults'
import { rootReducer, WorkbenchAction } from '../app'

const createWorkbenchStore = (): Store<WorkbenchState, WorkbenchAction> => {
    const middleware = applyMiddleware(thunk)
    return createStore(rootReducer, defaultWorkbenchState, middleware)
}

export default createWorkbenchStore
