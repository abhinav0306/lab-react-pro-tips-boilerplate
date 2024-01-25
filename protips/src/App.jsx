
import React from "react"
import { Route,Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Form from "./Pages/Form"
import "./App.css"
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/registration" element={<Form/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
}

export default App
