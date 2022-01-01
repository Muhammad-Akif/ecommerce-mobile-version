import React, { useState, createContext, useContext } from 'react';

const AuthContext = createContext();

export const ContextProvider = ({ children }) => {

    const [auth, setAuth] = useState({
        email: '',
        username: '',
        password: '',
        isAdmin: false,
        logout: true
    });

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);
