import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {fetchTodos} from './store/TodoSlice.jsx'

const Todo = () => {
const dispatch=useDispatch()
const todos=useSelector((state)=> state.todo)
console.log(todos)

  return (
    <div className='h-screen w-full bg-blue-200 flex items-center justify-center'>
        <button 
        className='bg-purple-600 py-3 px-4 rounded-md text-white'
        onClick={()=> dispatch(fetchTodos())}>Fetch todo</button>
        <ul className='list-decimal'>
            {
todos.data && todos.data.map((todo,index)=>{
    if(todo.userId < 100){
        return <li key={index}>{todo.title}</li>
    }
})
            }
        </ul>
    </div>
  )
}

export default Todo
