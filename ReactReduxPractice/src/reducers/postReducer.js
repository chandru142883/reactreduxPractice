const postReducer=(state=[],action)=>{
switch (action.type){
    case 'ADD_POST':
        return[
            ...state,action.data
        ]
        case '':
            return[]
    default:
        return state;    
}
}