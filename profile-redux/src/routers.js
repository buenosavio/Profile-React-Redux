import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";
import Profile from "./pages/profile/Profile";

function Routers() {

  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="*" element={<NotFound/>}/>
            <Route path='/' element={<Home />}/>
            <Route path='/profile' element={<Profile/>} />
            <Route path='/login' element={<Login/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routers