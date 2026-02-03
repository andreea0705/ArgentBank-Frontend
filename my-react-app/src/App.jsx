import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from "./components/Footer";
import Header from './components/header';
import Login from "./pages/Login";
import Profile from "./pages/profile";
import PrivateRoute from "./components/PrivateRoute.jsx";

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={ <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
