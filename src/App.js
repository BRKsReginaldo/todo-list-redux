import React, {Component} from 'react'
import {connect} from "react-redux"
import TodoList from "./TodoList"

class App extends Component {
  componentDidMount() {
    window.addTodo = todo => this.props.addTodo(todo)

    window.completeTodo = id => this.props.completeTodo(id)

    window.uncompleteTodo = id => this.props.uncompleteTodo(id)
  }

  render() {
    return (
      <div>
        <TodoList title="Uncomplete Todos" todos={this.props.uncompletedTodos}/>
        <TodoList title="Complete Todos" todos={this.props.completedTodos}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)

  return {
    uncompletedTodos: state.todos.filter(todo => !todo.completed),
    completedTodos: state.todos.filter(todo => todo.completed)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: todo => dispatch({type: 'ADD_TODO', payload: todo}),
    completeTodo: id => dispatch({type: 'COMPLETE_TODO', payload: id}),
    uncompleteTodo: id => dispatch({type: 'UNCOMPLETE_TODO', payload: id}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)