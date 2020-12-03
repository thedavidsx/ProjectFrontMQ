import {type as acctionsPopperTarget} from '../actions/acctionsPopperTarget'
const defaultState = "";

function reducer(state=defaultState, {type , payload }){
    switch(type){
        case acctionsPopperTarget :          
            return payload           
        default:
            return state
    }
}
export default reducer