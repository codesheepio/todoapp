import React, { PropTypes } from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, toggleStatus}) => (
  <ul>
    { todos.map((todo) => {
        return (
          <TodoItem
            key={todo.text}
            text={todo.text}
            complete={todo.complete}
            toggleStatus={toggleStatus}
          />
        )
    })}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

TodoList.defaultProps = {
  todos: []
}

export default TodoList