import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import Header from "./components/Header"
import HomeScreen from "./components/Home"
import Results from "./components/SearchResults"

const App = () => {
  return (
    <div>
    <Header/>
      <Routes>
        <Route index element={<HomeScreen/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/SearchResults" element={<Results/>} />
      </Routes>
    </div>
    
  )
}

export default App