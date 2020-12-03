import {type as actionsCodAplicacion} from '../actions/actionsCodAplicacion'
const defaultState = "";

function reducer(state=defaultState, {type , payload }){
    switch(type){
        case actionsCodAplicacion :          
            return payload           
        default:
            return state
    }
}
export default reducer