import React, { useState } from 'react'
import AddTodoForm from './AddTodoForm'

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: true },
  ])

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div>
      <h2>Todo List</h2>
      <AddTodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            data-testid={`todo-${todo.id}`}
          >
            {todo.text}
            <button onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id) }} data-testid={`delete-${todo.id}`}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
