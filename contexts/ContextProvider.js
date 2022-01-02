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

    const [cart, setCart] = useState({
        totalPrice: 0,
        items: [
        ]
    });

    return (
        <AuthContext.Provider value={{ auth, setAuth, cart, setCart }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useEcommerceContext = () => useContext(AuthContext);
