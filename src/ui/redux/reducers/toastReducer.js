import { SUCCESS } from "../actions"

const toastReducer=(state=null,action)=>{

    switch(action.type){
        case SUCCESS:
            return {severity:'success', summary: 'Woohoo !!!', detail:action.message, life: 3000}
        default:
            return null
        }
}

export default toastReducer