import { combineReducers, createStore } from 'redux'
import mainDataReducer from './mainDataReducer'

const store = createStore(
    combineReducers({
        mainData: mainDataReducer,
    }))
export default store
