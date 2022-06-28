import { GET_TODOS } from "./actionTypes";

export const reducer=(store,{type,payload})=>
{
    switch(type)
    {
        case GET_TODOS:
            return{
                ...store,
                todos:[...payload]
            };

        default:
        return store;
    }
    
}