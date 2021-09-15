import React from 'react'

import './TodoList.css'

interface TodoListProps {
  items: { id: string; text: string }[]
  onDeleteTodo: (todoId: string) => void
}

const TodoList: React.FunctionComponent<TodoListProps> = ({
  items,
  onDeleteTodo,
}) => {
  return (
    <div>
      <ul>
        {items.map((todo) => (
          <span>
            <li key={todo.id}>
              <span> {todo.text}</span>
              <button onClick={onDeleteTodo.bind(null, todo.id)}>Delete</button>
            </li>
          </span>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
