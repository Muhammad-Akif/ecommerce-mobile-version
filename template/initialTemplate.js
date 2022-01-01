const template = {
    auth: {
        whoIsLogin: '', //admin | user
        loginUserInfo: {
            email: '',
            username: '',
            password: ''
        },
        users: [
            { email: 'mrafeh@gmail.com', username: 'rafeh', password: '104056' },
            { email: 'makif@gmail.com', username: 'akif', password: '0312500' }
        ],
        admin: { // Only one Admin!
            email: 'abc@gmail.com',
            username: 'admin',
            password: 'admin'
        }
    },
    items: {
        lastId: 0,
        categories: {
            // categoryName: [],
        }
    },
    cart: {
        totalPrice: 0, // Some of all items totalPrice
        items: [
        ]
    },
    orders: [],
    weeklyDeals: [],
    favoriteItems: []
}

export default template;
