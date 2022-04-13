import { apiAuth } from "../../api"

export const handleLogin = async (values, dispatch) => {
    try {
        const {data} = await apiAuth.post('/auth', values)
        const isLogged = {
            type: 'SET_LOGIN',
            token: data,
            auth: true
        }
        localStorage.setItem('token', data)
        dispatch(isLogged)

    } catch (error) {
        console.log(error)        
    }
}

//criei um para logout por julgar mais bonito, não sei se devo usar o SET_LOGIN para o logout
export const handleLogout = (dispatch) => {
    const notLogged = {
        type: 'SET_LOGOUT',
        token: '',
        auth: false
    }
    dispatch(notLogged)
    localStorage.removeItem('token')
}

//permanecer logado ao dar f5 na página
export const isLogged = (token, dispatch) => {
    const isLogged = {
        type: 'SET_LOGIN',
        token: token,
        auth: true
    }
    dispatch(isLogged)    
}