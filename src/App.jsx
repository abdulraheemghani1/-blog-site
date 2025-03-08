import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import UserDashboard from './components/UserDashbord'
import AdminDashboard from './components/AdminPanel'
import BlogComponent from './components/Blog'

function App() {

  return (
    <>
     <Navbar />
     <Home   />
   
   
     <Footer />
    </>
  )
}

export default App
