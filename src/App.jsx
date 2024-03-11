import { useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>homepage</h1>

      </div>
        
    </>
  )
}

export default App
