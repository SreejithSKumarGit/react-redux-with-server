import React from "react";
import {useSelector,useDispatch} from "react-redux";
import { getTodos } from "../redux/action";
import {v4 as uuid} from "uuid";
import {Link} from "react-router-dom";

export const TodoItem=()=>
{
    const dispatch=useDispatch();
    const {todos}=useSelector((state)=>state);
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
    const handleToggle=(item)=>
    {
        let data={
            title:item.title,
            status:!item.status,
            id:uuid()
        }
        fetch(`http://localhost:3001/todos/${item.id}`,
        {
            method:"PUT",
            body:JSON.stringify(data),
            headers:{"Content-Type":"Application/json"}
        })
        getAllTodo();
        
    }
    const handleDelete=(item)=>
    {
        fetch(`http://localhost:3001/todos/${item.id}`,
        {
            method:"DELETE",
            headers:{"Content-Type": "Application/json"}
        }
        )
        getAllTodo();
    
    }
    React.useEffect(()=>
    {
       getAllTodo();
    },[])
    return(
        <>
        {
            todos?.map((item)=>
            (
                <div>
                <Link to={`/todo/${item.id}`}>
                    <div 
                    key={item.id}>
                        <h1>{item.title}</h1>
                    </div>
                </Link>
                </div>
            ))
        }
        </>
    )
}