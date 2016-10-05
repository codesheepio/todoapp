import React, { PropTypes } from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos}) => (
  <ul>
    { todos.map((todo) => {
        return <TodoItem key={todo.text} text={todo.text} complete={todo.complete} />
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