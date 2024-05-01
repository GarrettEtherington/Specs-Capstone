import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import Header from "./components/Header"

const App = () => {
  return (
    <div>
    <Header/>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
    
  )
}

export default App