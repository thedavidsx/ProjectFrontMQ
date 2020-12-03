import {type as menuOpen} from '../actions/menuOpen'
const defaultState=false

function reducer(state=defaultState, {type , payload }){
    switch(type){
        case menuOpen :          
            return !payload               
        default:
            return state
    }
}
export default reducer