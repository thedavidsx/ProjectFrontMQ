import {type as tabChange} from '../actions/tabChange'
const defaultState = 0

function reducer(state=defaultState, {type , payload }){
    switch(type){
        case tabChange :          
            return payload === 0 ? 0 : 1          
        default:
            return state
    }
}
export default reducer