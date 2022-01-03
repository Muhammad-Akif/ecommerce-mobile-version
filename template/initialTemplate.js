import { initialAdmin, initialUsers } from "../constants/settings";

const template = {
    auth: {
        whoIsLogin: '', //admin | user
        loginUserInfo: {
            email: '',
            username: '',
            password: ''
        },
        users: initialUsers,
        admin: initialAdmin
    },
    items: {
        lastId: 0,
        categories: {
            // categoryName: [],
        }
    },
    cart: [],
    orders: [],
    weeklyDeals: [],
    favoriteItems: []
}

export default template;
