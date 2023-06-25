import { ADD, MOINS } from "./actionTypes";




const init={
    count:0
}

export const reducer=(state=init,action)=>{
    // console.log(state)
    switch (action.type) {
        case ADD:
            return{
                ...state,count:state.count+1
            }
        case MOINS:
            return{
                ...state, count:   state.count-1 
            }   
            
    
        default:
return  state
    }
}