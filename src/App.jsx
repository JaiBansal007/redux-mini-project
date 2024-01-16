import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Cart from './Components/Cart'
import {Toaster} from 'react-hot-toast'
import "./styles/app.scss"
const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Toaster/>
      </Router>
    </>
  )
}

export default App
