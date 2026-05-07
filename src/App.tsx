import { Routes, Route } from "react-router-dom"

import Home from "./Pages/Home"
import Login from "./Pages/Login"
import ApplyNow from "./Pages/ApplyNow"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route path="/applynow" element={<ApplyNow />} />
    </Routes>
  )
}

export default App