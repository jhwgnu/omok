import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Square from './components/Square'
import square from './reducers'
import Board from './components/Board'
import board from './reducers'
import Game from './components/Game'
import game from './reducers'

const store = createStore(game)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
    <Game />,
    // <Board />,
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
