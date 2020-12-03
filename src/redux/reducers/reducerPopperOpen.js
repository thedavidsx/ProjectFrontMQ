import {type as acctionsPopperOpen} from '../actions/acctionsPopperOpen'
const defaultState = false;

function reducer(state=defaultState, {type , payload }){
    switch(type){
        case acctionsPopperOpen :          
            return payload            
        default:
            return state
    }
}
export default reducer