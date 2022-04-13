const INITIAL_STATE = {
    auth: {
        token: '',
        auth: false,
        loading: true,
        error: false
    }
}

// função de autenticação... pode haver varias funcoes, ex: funcao de login, funcao de logout, etc.
function authReducer(state = INITIAL_STATE, action) {
  if (action.type === 'SET_LOGIN') {
      return {
          //spread para carregar os valores do state anterior
          ...state,
          auth: {
            token: action.token,
            auth: action.auth,
            loading: action.loading,
            error: action.error
          }
          
      }
  } else if (action.type === 'SET_LOGOUT') {
    return {
      ...state,
      auth: {
        token: action.token,
        auth: action.auth,
        loading: action.loading,
        error: action.error
    }
    }
  }
  // se nao caiu no if, continua no atual state
  return state
}

export default authReducer