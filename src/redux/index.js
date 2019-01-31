import {createStore} from 'redux'
import rootReducers from './reducers'

export function reducerFactory(defaultState, handlers) {
  return (state = defaultState, action) => {
    const handler = handlers[action.type];

    return handler
      ? handler(state, action)
      : state;
  };
}


export default createStore(rootReducers)