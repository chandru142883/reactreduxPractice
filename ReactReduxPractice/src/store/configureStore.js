import {createStore} from 'redux'

var defaultState={
    rate:0
}

function ReduceRate(state=defaultState,action)
{
if(action.type==="rate")
{
    return{
        ...state,rate:action.data.rate
    }
}
return state;
}

var store=createStore(ReduceRate);

export default store;