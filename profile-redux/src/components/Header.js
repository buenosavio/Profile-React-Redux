import { useEffect } from "react";
import { connect } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { handleLogout, isLogged, handleLogin } from "../store/actions/AuthActions";

const Header = ({auth, dispatch}) => {

    const navigate = useNavigate();

    useEffect(() => {
        const hasToken = localStorage.getItem('token')
        if (hasToken) {
            isLogged(hasToken, dispatch)
        }else {
            navigate('/login')
        }        
    },[])
    
    return(
        <header>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                    <Link to='/profile'>Perfil</Link>
                    <button onClick={() => handleLogout(dispatch)}>Logout</button>
                </li>
            </ul>
        </header>
    )
}

const mapStateToProps = state => ({
    auth: state.authReducer.auth
})

export default connect (mapStateToProps)(Header);