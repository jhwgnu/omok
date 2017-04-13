import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Board from './components/Board'
import Square from './components/Square'
import board from './reducers'
import square from './reducers'

const store = createStore(board)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
    <Board />,
    // <Square />,
  // <Square
  //
  //   value={store.getState()}
  //   onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
  //   onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  // />,
  rootEl
)

render()
store.subscribe(render)
