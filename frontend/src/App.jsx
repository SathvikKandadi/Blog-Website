//rfc
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./Components/Signup"
import Signin from "./Components/Signin"
import Blog from "./Components/Blog"
import CreatBlog from "./Components/CreatBlog"
import AppBar from "./Components/AppBar"


function App(){
  return(
    <>
    <BrowserRouter>
    <AppBar></AppBar>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/" element={<Blog />} />
      <Route path="/createblog" element={<CreatBlog />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
