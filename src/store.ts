import {createStore, combineReducers} from 'redux'
import elementsReducer from './reducers/elementsReducer'

const rootReducer = combineReducers({
    elements: elementsReducer
})

const configureStore = () => createStore(rootReducer)

export default configureStore