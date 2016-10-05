import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

class TodoApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos:[
        { text: "read book", complete: true},
        { text: "go for walk", complete: false},
      ]
    }
    this.addTodo = this.addTodo.bind(this)
    this.toggleStatus = this.toggleStatus.bind(this)
  }
  addTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          text: text,
          complete: false,
        }
      ],
    })
  }
  toggleStatus(text) {
    console.log(text)
    this.setState({
      todos: this.state.todos.map((todo) => {
        return (todo.text==text)
          ?{ text: todo.text, complete: !todo.complete }
          :todo
      })
    })
  }
  render() {
    return (
      <div>
        <TodoInput addTodo={this.addTodo} />
        <TodoList 
          todos={this.state.todos}
          toggleStatus={this.toggleStatus}
        />
      </div>
    )
  }
}

export default TodoApp