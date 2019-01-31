import React, {Component} from 'react'
import {connect} from "react-redux"

class TodoList extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <ul>
          {this.props.todos.map(task => (
            <li key={task.id}>
              <p>{task.id} - {task.todo}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default TodoList