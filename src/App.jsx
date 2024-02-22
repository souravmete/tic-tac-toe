import { useState } from 'react'
import './App.css'
import Board from './component/Board'

function App() {

  return (
    <>
    <div>
      <h1 className='title'>Tic Tac Toe</h1>
    </div>
    <div className=''>
      <Board/>
    </div>
    </>
  )
}

export default App
