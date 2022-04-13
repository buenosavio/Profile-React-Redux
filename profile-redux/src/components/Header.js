import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../store/actions/AuthActions";
import Menu from "./Menu";

const Header = ({auth, dispatch}) => {

    const navigate = useNavigate();

    useEffect(() => {
        const hasToken = localStorage.getItem('token')
        if (!hasToken) {
            navigate('/login')
        }
        
    },[]) 

    const isLogged = () => {
        const hasToken = localStorage.getItem('token')
        return (hasToken)
      }
    
    return(
        <header>
            {isLogged() ? 
                <>
                    <Menu />         
                    <button onClick={() => handleLogout(dispatch, navigate)}>Logout</button> 
                </> : null}                        
        </header>
    )
}

const mapStateToProps = state => ({
    auth: state.authReducer.auth
})

export default connect (mapStateToProps)(Header);