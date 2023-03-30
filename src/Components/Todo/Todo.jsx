import React, { useState, useRef } from 'react'
import './Todo.css'

const Todo = () => {
  const [todo, setTodo] = useState([])
  const [currentTask, setCurrentTask] = useState("")
  const inputTask = useRef(null)

  const addTask = () => {
    setTodo([...todo, { task: currentTask, completed: false }]);
    inputTask.current.value = "";
    setCurrentTask("")
  }
  const deleteTask = (taskToDelete) => {
    setTodo(todo.filter((t) => {
      return t.task !== taskToDelete
    }))
  }

  const completeTask = (taskToComplete) => {
    setTodo(todo.map(t => {
      return t.task === taskToComplete ? { task: taskToComplete, completed: true } : { task: t.task, completed: t.completed }
    }))
  }

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input ref={inputTask} type="text" placeholder="Task..." onKeyDown={(e) => {if(e.keyCode === 13) addTask()}} onChange={e => setCurrentTask(e.target.value)} />
        <button onClick={addTask}>Add Task</button>
        {/* Or no need of useRef and .current.value line, just add this value={currentTask} in input and you are done*/}
      </div>
      <hr />
      <ul>
        {todo.map((val, key) => {
          return (
            <div id="task">
              <li key={key}>{val.task}</li>
              <button onClick={() => completeTask(val.task)}>Completed</button>
              <button onClick={() => deleteTask(val.task)}>X</button>
              {val.completed ? <h2>Task Completed!!</h2> : <h2>Task Not Completed!!</h2>}
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default Todo;