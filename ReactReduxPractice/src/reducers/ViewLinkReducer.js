
const defaultState=[];

   const ViewLinkReducer=(state=defaultState,action)=>{
       switch(action.type){
                case 'ADD':
                    console.log("data reducer",action.data);
                   
                    return [
                        ...state,
                        action.data
                    ]

                        
            default:
               return state;
       }
   }

   export default ViewLinkReducer;