import {createStore, combineReducers} from 'redux'
import menuMain from './reducers/menuMain'
import reduxTab from './reducers/reduxTab'
import reducerCodCanal from './reducers/reducerCodCanal'
import reducerCodAplicacion from './reducers/reducerCodAplicacion'
import reducerbadgeContent from './reducers/reducerbadgeContent'
import reducerPopperOpen from './reducers/reducerPopperOpen'
import reducerPopperTarget from './reducers/reducerPopperTarget'
import reducerMessages from './reducers/reducerMessages'
import reducerCountMessages from './reducers/reducerCountMessages'

const reducer = combineReducers({
    menuMain,
    reduxTab,
    reducerCodCanal,
    reducerCodAplicacion,
    reducerbadgeContent,
    reducerPopperOpen,
    reducerPopperTarget,
    reducerMessages,
    reducerCountMessages
})

const store= createStore(reducer)

export default store