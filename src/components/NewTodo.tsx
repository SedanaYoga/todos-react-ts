import React, { useRef } from 'react'

import './NewTodo.css'

interface NewTodoProps {
  onAddTodo: (todoText: string) => void
}

const NewTodo: React.FunctionComponent<NewTodoProps> = ({ onAddTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null)
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const enteredText = textInputRef.current!.value
    onAddTodo(enteredText)
    textInputRef.current!.value = ''
  }
  return (
    <form className="form-control" onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default NewTodo
