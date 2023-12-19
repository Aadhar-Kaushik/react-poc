import { SET_NAME } from "../actions";

const INITIAL_STATE="HOME"
const headerReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case SET_NAME:
            return action.data
        default:
            return state
    }
}

export default headerReducer