import React from 'react'
import ReactDOM from 'react-dom'

import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import styles from './styles.css'

const todos = [
  { text: "read book", complete: true},
  { text: "go for walk", complete: false},
]
const App = (
  <div>
    <TodoInput />
    <TodoList todos={todos} />
  </div>
)
ReactDOM.render(App,
  document.getElementById('react-root'))