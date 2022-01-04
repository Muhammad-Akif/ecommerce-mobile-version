// Auth Data Structure
const auth = {
  whoIsLogin: '', //admin | user
  loginUserInfo: {
    email: '',
    username: '',
    password: '',
    loginFromWhere: '' // f | g | app
  },
  users: [
    { email: 'abc1', username: 'abc1', password: 'abc1' },
    { email: 'abc2', username: 'abc2', password: 'abc2' }
  ],
  admin: { // Only one Admin!
    email: 'abc',
    username: 'abc',
    password: 'abc'
  }
}

// Items Data Structure!
const items = {
  lastId: 4,
  categories: {
    category1: [
      { id: 1, name: "abc", detail: "abc", price: 20, uri: '///', ratings: [{ email: 'abc2', username: 'abc2', password: 'abc2', rating: 5, desc: 'Good Item' }] },
      { id: 2, name: "abc", detail: "abc", price: 20, uri: '///', ratings: [{ email: 'abc2', username: 'abc2', password: 'abc2', rating: 2, desc: 'Good Item' }] }
    ],
    category2: [
      { id: 3, name: "abc", detail: "abc", price: 20, uri: '///', ratings: [{ email: 'abc2', username: 'abc2', password: 'abc2', rating: 5, desc: 'Good Item' }] },
      { id: 4, name: "abc", detail: "abc", price: 20, uri: '///', ratings: [{ email: 'abc2', username: 'abc2', password: 'abc2', rating: 5, desc: 'Good Item' }] }
    ]
  }
};

// Cart Items
const cart = [
  {
    username: '', // unique
    totalPrice: 3000, // Some of all items totalPrice
    items: [
      { category: 'uniqueId', id: 'uniqueId', name: 'abc', detail: 'abc', price: 30, uri: '///', quantity: 3, totalPrice: 3 * 30 }
    ]
  }
]

// Orders
const orders = [
  {
    id: '', username: '', startDate: '', price: 6000, deliveryTime: '', status: 'delivered | picked', items: [
      { category: 'uniqueId', id: 'uniqueId', name: 'abc', detail: 'abc', price: 30, quantity: 3, totalPrice: 3000 },
      { category: 'uniqueId', id: 'uniqueId', name: 'abc', detail: 'abc', price: 30, quantity: 3, totalPrice: 3000 },
    ]
  }, // 1st Order
]

// weekly deals
const weeklyDeals = [
  { category: 'unique', id: 'uniqueId', name: 'abc', detail: 'abc', price: 100, uri: '///', ratings: [{ email: 'abc2', username: 'abc2', password: 'abc2', rating: 5, desc: 'Good Item' }], discountPrice: 20, off: '20%' },
  { category: 'unique', id: 'uniqueId', name: 'abc', detail: 'abc', price: 100, uri: '///', ratings: [{ email: 'abc2', username: 'abc2', password: 'abc2', rating: 5, desc: 'Good Item' }], discountPrice: 20, off: '20%' }
  // { name: 'abc', detail: 'abc', price: 100, discountPrice: 20, off: '20%' } ........
]

// Favorite Items
const favoriteItems = [
  { username: '', id: 'uniqueId', name: "abc", detail: "abc", price: 20, uri: '///', category: '', ratings: [{ email: 'abc2', username: 'abc2', password: 'abc2', rating: 5, desc: 'Good Item' }] },
  { username: '', id: 'uniqueId', name: "abc", detail: "abc", price: 20, uri: '///', category: '', ratings: [{ email: 'abc2', username: 'abc2', password: 'abc2', rating: 5, desc: 'Good Item' }] }
  // { id: 'uniqueId', name: "abc", detail: "abc", price: 20, ratings: [{ email: 'abc2', username: 'abc2', password: 'abc2', rating: 5, desc: 'Good Item' }] }
]
