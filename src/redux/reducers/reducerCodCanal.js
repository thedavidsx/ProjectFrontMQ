import {type as actionsCodCanal} from '../actions/actionsCodCanal'
const defaultState = "";

function reducer(state=defaultState, {type , payload }){
    switch(type){
        case actionsCodCanal :          
            return payload           
        default:
            return state
    }
}
export default reducer