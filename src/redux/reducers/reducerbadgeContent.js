import {type as actionsbadgeContent} from '../actions/actionsbadgeContent'
const defaultState = "";

function reducer(state=defaultState, {type , payload }){
    switch(type){
        case actionsbadgeContent :          
            return payload           
        default:
            return state
    }
}
export default reducer