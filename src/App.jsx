import { useState } from 'react'
import './index.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

    </>
  )
}

export default App
