import { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";
import Profile from "./pages/profile/Profile";
import { isLogged } from "./store/actions/AuthActions";

function Routers({auth, dispatch}) {

  useEffect(() => {
    const hasToken = localStorage.getItem('token')
    if (hasToken) {
        isLogged(hasToken, dispatch)
    } 
  },[])

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

const mapStateToProps = state => ({
  auth: state.authReducer.auth
})

export default connect(mapStateToProps)(Routers)