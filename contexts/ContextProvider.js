import React, { useState, createContext, useContext, useEffect } from 'react';
import checkAndReadFile from '../functions/checkAndReadFile';
import { items as defaultItems } from '../data/items';
import template from '../template/initialTemplate';

const AuthContext = createContext();

export const ContextProvider = ({ children }) => {
    const fetchData = async () => {
        const data = await checkAndReadFile();
        if (!data) {
            return;
        }
        setAuth(data.auth);
        setCart(data.cart);
        setAllData(data);
        setOrders(data.orders)
        setFavoriteItems(data.favoriteItems)
        setItems(data.items)
        setWeeklyDeals(data.weeklyDeals)
    }
    useEffect(() => {
        fetchData();
    }, [])
    const [auth, setAuth] = useState(template.auth);

    const [cart, setCart] = useState([]);

    const [orders, setOrders] = useState([]);

    const [weeklyDeals, setWeeklyDeals] = useState([]);

    const [favoriteItems, setFavoriteItems] = useState([]);

    const [allData, setAllData] = useState(template);

    const [items, setItems] = useState({
        lastId: 16,
        categories: defaultItems
    });

    const [savedItems, setSavedItems] = useState({
        lastId: 16,
        categories: defaultItems
    });

    const [priceFilter, setPriceFilter] = useState('nothing');

    return (
        <AuthContext.Provider value={{ priceFilter, setPriceFilter, savedItems, setSavedItems, weeklyDeals, setWeeklyDeals, items, setItems, auth, setAuth, cart, setCart, allData, setAllData, orders, setOrders, favoriteItems, setFavoriteItems }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useEcommerceContext = () => useContext(AuthContext);
