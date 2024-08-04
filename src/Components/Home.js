import React, { useState } from 'react'
import {v4 as uuid4} from "uuid";
import Todos from './Todos';
import style from './home.module.css';
import NewTodo from './NewTodo';



const Home = () => {

  const [todos,setTodos] = useState([]);

  const handleAddTodo = (todo)=>{

    setTodos((prevTodos)=>{
    return [... prevTodos,{id:uuid4(), todo}]
    })
  }

  const handleRemoveTodo = (id)=>{
    
    setTodos((prevTodos)=>{
      const filterTodos = prevTodos.filter((todo)=>todo.id !== id)
      return filterTodos;
    });
  }

  return (
    <div   className={style.container}>
        <h1 style={{color:"white"}}>Todo App</h1>
        <NewTodo onAddTodo={handleAddTodo}/>
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  )
}

export default Home
