import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from "./components/Footer";
import Header from './components/header';
import Login from "./pages/Login";

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
