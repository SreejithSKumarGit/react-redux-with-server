import React from "react";
import {useParams} from "react-router-dom";
import { v4 as uuid } from "uuid";

export const TodoDetails=()=>
{
    const {id}=useParams();
    const [todo,setTodo]=React.useState([]);
    const getTodos=()=>
    {
        fetch(`http://localhost:3001/todos/${id}`)
        .then((res)=>res.json())
        .then((res)=>{
            setTodo(res)
            console.log(todo)
           })
        .catch((error)=>
        {
            console.log(error)
        })
    }

    const handleToggle=(todo)=>
    {
        let data={
            title:todo.title,
            status:!todo.status,
            id:uuid()
        }
        console.log(todo)
        fetch(`http://localhost:3001/todos/${todo.id}`,
        {
            method:"PUT",
            body:JSON.stringify(data),
            headers:{"Content-Type":"Application/json"}
        })
        getTodos();
        
    }
    const handleDelete=(todo)=>
    {
        fetch(`http://localhost:3001/todos/${todo.id}`,
        {
            method:"DELETE",
            headers:{"Content-Type": "Application/json"}
        }
        )
        getTodos();
    }

    React.useEffect(()=>
    {
        
        getTodos();
    },[]);


    return(
        <> 
        <div>
            <h1>{todo.title}</h1>
            <button onClick={()=>
            handleToggle(todo)}>{todo.status?"Complete":"Not Complete" }</button>
            <button onClick={()=>handleDelete(todo)}>Delete</button>
        </div>

        </>
    )
}