import React, { useState, createContext, useContext, useEffect } from 'react';
import checkAndReadFile from '../functions/checkAndReadFile';

const AuthContext = createContext();

export const ContextProvider = ({ children }) => {
    const fetchData = async () => {
        const data = await checkAndReadFile();
        setCart(data.cart);
        setAllData(data);
    }
    useEffect(() => {
        fetchData();
    }, [])
    const [auth, setAuth] = useState({
        email: '',
        username: '',
        password: '',
        isAdmin: false,
        logout: true
    });

    const [cart, setCart] = useState([
        // {
        // uername: '',
        // totalPrice: 0,
        // items: [] }
    ]);

    const [orders, setOrders] = useState([
        // {
        // uername: '',
        // totalPrice: 0,
        // items: [] }
    ]);

    const [allData, setAllData] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth, cart, setCart, allData, setAllData, orders, setOrders }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useEcommerceContext = () => useContext(AuthContext);
