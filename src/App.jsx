import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import TestPage from './Pages/TestPage'

function App() {
  
  const [count, setCount] = useState(0)


  const setCountHandler = () =>{
    setCount(count =>count + 1)
  }

  return (
    <>
     <Home/>
     <TestPage/>
     <button onClick={setCountHandler}>Increment Counter</button>
     <p>{count}</p>
    </>
  )
}

export default App
