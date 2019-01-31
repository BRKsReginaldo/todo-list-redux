import {reducerFactory} from "../index"

const defaultState = {
  todos: []
}

const actions = {
  ADD_TODO: 'ADD_TODO',
  COMPLETE_TODO: 'COMPLETE_TODO',
  UNCOMPLETE_TODO: 'UNCOMPLETE_TODO'
}

const handlers = {}

handlers[actions.ADD_TODO] = (state, action) => ({
  todos: [...state.todos, {id: (new Date()).getTime(), todo: action.payload, completed: false}]
})

handlers[actions.COMPLETE_TODO] = (state, action) => ({
  todos: state.todos.map(todo => todo.id === action.payload ? ({...todo, completed: true}) : todo)
})

handlers[actions.UNCOMPLETE_TODO] = (state, action) => ({
  todos: state.todos.map(todo => todo.id === action.payload ? ({...todo, completed: false}) : todo)
})

export default reducerFactory(defaultState, handlers)
