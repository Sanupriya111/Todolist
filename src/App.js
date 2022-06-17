import React from 'react'
import Addlist from './components/Addlist/Addlist'
import Viewlist from './components/Viewlist/Viewlist'
import { useState } from 'react'
import { useEffect } from 'react'
export default function App() {
const [todo,setTodo]=useState([])
const todolist=(list)=>{
  setTodo([...todo,{...list}])
console.log(list)
console.log(todo)
}
const removeId=(item)=>{
  const filtdata=todo.filter((check,i,rep)=>{
 
return (i !==item)
 });
 setTodo(filtdata)
}
useEffect(()=>{
  const localdata=JSON.parse(localStorage.getItem("todolistss"))
  setTodo(localdata)

},[])

useEffect(()=>{
  localStorage.setItem("todolistss",JSON.stringify(todo))
 
 },[todo]);
 
  return (
    <div><Addlist todos={todolist}/>
    <Viewlist todotask={todo}  remove={removeId}/>
</div>
  )
}

