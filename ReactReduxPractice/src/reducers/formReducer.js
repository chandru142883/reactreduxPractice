const formReducer=(state=[], action)=>{
    switch(action.type){
        case 'formInput':
            return[
                ...state,action.data
            ]
        default:
            return state;
    }
}