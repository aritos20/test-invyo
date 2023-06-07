import React, { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext(false);

export const useAuth = () => {
    return useContext(AuthContext);
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            if (action.value.email === 'test@invyo.io' && action.value.password === 'test123@') {
                sessionStorage.setItem('login', JSON.stringify({email: action.value.email, isLogged: true}));
                return {email:'', isLogged: true};
            } else {
                alert('Invalid Credentials');
                return {email: '', isLogged: false};
            }
        case 'LOGOUT':
            sessionStorage.removeItem('login');
            return {email: '', isLogged: false};
        default:
            return {...state};
    }
}

const AuthProvider = ({ children }) => {
    const [user, dispatch] = useReducer(reducer, JSON.parse(sessionStorage.getItem('login')) || {email: '', isLogged: false});

  return (
    <AuthContext.Provider value={{user, dispatch}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider