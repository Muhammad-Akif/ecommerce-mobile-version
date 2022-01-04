import { initialAdmin, initialUsers } from "../constants/settings";
import { items } from '../data/items';
const template = {
    auth: {
        whoIsLogin: '', //admin | user
        loginUserInfo: {
            email: '',
            username: '',
            password: '',
            loginFromWhere: '' // f | g | app
        },
        users: initialUsers,
        admin: initialAdmin
    },
    items: {
        lastId: 16,
        categories: items
    },
    cart: [],
    orders: [],
    weeklyDeals: [],
    favoriteItems: []
}

export default template;
