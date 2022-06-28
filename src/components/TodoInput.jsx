import React from "react";
import {v4 as uuid} from "uuid";
import {useDispatch} from "react-redux";
import { getTodos } from "../redux/action";

export  const TodoInput=()=>
{
    const [input ,setInput]=React.useState("");
    const dispatch=useDispatch();
  
    const getAllTodo=()=>
    {
        fetch('http://localhost:3001/todos')
        .then((res)=>res.json())
        .then((res)=>
        {
            dispatch(getTodos(res));
           
        })
        .catch((error)=>
        {
            console.log(error);
        })
        
        
    }
    const handleAdd=()=>
    {
        let payload={
            title:input,
            status:false,
            id:uuid()
        }
        fetch(`http://localhost:3001/todos`,{
            method:'POST',
            body:JSON.stringify(payload),
            headers:{"Content-type":"Application/json"}
        })
        getAllTodo();
       
        setInput("");
    }
    
    return (
        <>
        <h1>Add TODO</h1>
        <input type="text"
        value={input}
        placeholder="Add TODO"
        onChange={(e)=>setInput(e.target.value)}
         />
         <br />
         <button onClick={handleAdd}>Add</button>
        </>
    )
}