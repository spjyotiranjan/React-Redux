const initialState = {
    likes: 0
}


export const reducer = (state=initialState, action)=>{
    switch(action.type){
        case 'increment':
            return {...state,likes: state.likes+1}
        case 'decrement':
            return {...state,likes: state.likes > 0 ? state.likes-1:state.likes }
        default:
            return state
    }
}