// Auth Data Structure
const auth = {
  whoIsLogin: '', //admin | user
  loginUserInfo: {
    email: '',
    username: '',
    password: ''
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
  category1: [
    { id: 'uniqueId', name: "abc", detail: "abc", price: 20, uri: '///', ratings: [{ email: 'abc2', username: 'abc2', password: 'abc2', rating: 5, desc: 'Good Item' }] },
    { id: 'uniqueId', name: "abc", detail: "abc", price: 20, uri: '///', ratings: [{ email: 'abc2', username: 'abc2', password: 'abc2', rating: 2, desc: 'Good Item' }] }
  ],
  category2: [
    { id: 'uniqueId', name: "abc", detail: "abc", price: 20, uri: '///', ratings: [{ email: 'abc2', username: 'abc2', password: 'abc2', rating: 5, desc: 'Good Item' }] },
    { id: 'uniqueId', name: "abc", detail: "abc", price: 20, uri: '///', ratings: [{ email: 'abc2', username: 'abc2', password: 'abc2', rating: 5, desc: 'Good Item' }] }
  ]
};

// Cart Items
const cart = {
  totalPrice: 3000, // Some of all items totalPrice
  items: [
    { category: 'uniqueId', id: 'uniqueId', name: 'abc', detail: 'abc', price: 30, uri: '///', quantity: 3, totalPrice: 3 * 30 }
  ]
}

// Orders
const orders = [
  {
    startDate: '', price: 6000, deliveryTime: '', status: 'delivered | picked', items: [
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
  { id: 'uniqueId', name: "abc", detail: "abc", price: 20, uri: '///', ratings: [{ email: 'abc2', username: 'abc2', password: 'abc2', rating: 5, desc: 'Good Item' }] },
  { id: 'uniqueId', name: "abc", detail: "abc", price: 20, uri: '///', ratings: [{ email: 'abc2', username: 'abc2', password: 'abc2', rating: 5, desc: 'Good Item' }] }
  // { id: 'uniqueId', name: "abc", detail: "abc", price: 20, ratings: [{ email: 'abc2', username: 'abc2', password: 'abc2', rating: 5, desc: 'Good Item' }] }
]
