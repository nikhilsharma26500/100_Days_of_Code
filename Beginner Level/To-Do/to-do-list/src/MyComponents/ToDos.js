import React from 'react'
import {ToDoItem} from "./ToDoItem"

export const ToDos = (props) => {
  return (
    <div className="container">
      <h3 className='text-center'>To-Do List</h3>
        {props.todos.map((todo) => {
          return <ToDoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        })}
      
    </div>
  )
}
