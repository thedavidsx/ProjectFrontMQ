import {type as acctionMessages} from '../actions/acctionMessages'
const defaultState = [];

function reducer(state=defaultState, {type , payload }){
    switch(type){
        case acctionMessages :          
            return payload           
        default:
            return state
    }
}
export default reducer