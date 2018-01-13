import { createStore } from 'redux'

const reducer = (state, action) => {
  if (action.type === 'increment') {
    return state + action.payload
  }
  if (action.type === 'decrement') {
    return state - action.payload
  }
  return state
}

const store = createStore(reducer, 0)

store.subscribe(()=> {
  console.log('store changed', store.getState())
})

store.dispatch({type: 'increment', payload: 20})
store.dispatch({type: 'decrement', payload: 1000})
