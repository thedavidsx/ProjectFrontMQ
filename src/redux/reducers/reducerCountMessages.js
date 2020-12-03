import {type as acctionCountMessages} from '../actions/acctionCountMessages'
const defaultState = "";

function reducer(state=defaultState, {type , payload }){
    switch(type){
        case acctionCountMessages :          
            return payload           
        default:
            return state
    }
}
export default reducer