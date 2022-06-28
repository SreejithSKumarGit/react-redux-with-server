import { GET_TODOS } from "./actionTypes";

export const getTodos=(data)=>
({
    type:GET_TODOS,
    payload:data
});