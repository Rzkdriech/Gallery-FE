import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home.jsx'
import { Album } from '../pages/Album.jsx'
import { Login } from '../pages/Login.jsx'

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={  <Home />  }></Route>
        <Route path="/album" element={ <Album /> }></Route>
        <Route path="/login" element={ <Login />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}
