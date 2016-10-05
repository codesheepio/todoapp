import React, { Component } from 'react'

class TodoInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentText: '',
    }
    this.addTodo = this.addTodo.bind(this)
    this.addTodoOnEnter = this.addTodoOnEnter.bind(this)
    this.changeText = this.changeText.bind(this)
  }
  addTodo() {
    this.props.addTodo(this.state.currentText)
    this.setState({
      currentText: ''
    })
  }
  addTodoOnEnter(event) {
    if (event.keyCode === 13) {
      this.props.addTodo(this.state.currentText)
      this.setState({
        currentText: ''
      })
    }
  }
  changeText(event) {
    this.setState({
      currentText: event.target.value
    })
  }
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.changeText}
          onKeyDown={this.addTodoOnEnter}
          value={this.state.currentText}
        />
        <button onClick={this.addTodo}>Add Todo</button>
      </div>
    )
  }
}

export default TodoInput