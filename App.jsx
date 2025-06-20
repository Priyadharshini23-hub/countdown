
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashborad from "./pages/Dashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashborad/>}/>
        <Route path="/Login" element={<Login/>}/>
       <Route path="/Register" element={<Register/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;