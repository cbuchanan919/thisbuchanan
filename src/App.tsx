import { useState } from 'react'
import Nav from './components/Nav.tsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [i, setI] = useState('a');

  return (
    <>
    <Nav/>
      <h1>This Buchanan</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {/* <div className="card">
        <button onClick={() => setI((i) => i + i)}>
          i is {i}
        </button>
      </div> */}
    </>
  )
}

export default App
