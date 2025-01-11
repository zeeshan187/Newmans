import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import TopNavbar from './components/TopNavbar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
  return (
    <BrowserRouter>
    <TopNavbar />
    <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
