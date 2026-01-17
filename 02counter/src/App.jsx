import { useState } from 'react'

function App() {
  let[counter, setCounter]= useState(0) //hooks let[variable,method]

// let counter = 0

const addValue = () =>{
  // setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)//batching same value avoid
  setCounter((prevCounter)=> prevCounter +1)
  setCounter((prevCounter)=> prevCounter +1)
  setCounter((prevCounter)=> prevCounter +1)
  setCounter((prevCounter)=> prevCounter +1) //callback function prev state
}

const removeValue = () =>{
  setCounter(counter - 1)
}

  return (
    <>
    <h1>React course {counter}</h1>
    <h2>Counter value:{counter}</h2>
    <button onClick={addValue}>Add value</button>{""}
    <button onClick={removeValue}>Remove Value</button>{""}
    <p>footer:{counter}</p>
    </>
  )
}

export default App
