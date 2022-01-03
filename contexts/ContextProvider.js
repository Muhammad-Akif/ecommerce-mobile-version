import React, { useState, createContext, useContext, useEffect } from 'react';
import checkAndReadFile from '../functions/checkAndReadFile';

const AuthContext = createContext();

export const ContextProvider = ({ children }) => {
    const fetchData = async () => {
        const data = await checkAndReadFile();
        setCart(data.cart);
        setAllData(data);
        setOrders(data.orders)
        setFavoriteItems(data.favoriteItems)
        setItems(data.items)
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

    const [orders, setOrders] = useState([]);

    const [favoriteItems, setFavoriteItems] = useState([]);

    const [allData, setAllData] = useState({});

    const [items, setItems] = useState({});

    return (
        <AuthContext.Provider value={{ items, setItems, auth, setAuth, cart, setCart, allData, setAllData, orders, setOrders, favoriteItems, setFavoriteItems }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useEcommerceContext = () => useContext(AuthContext);
