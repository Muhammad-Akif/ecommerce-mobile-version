class Cart {
    constructor(username, totalPrice, items) {
        this.username = username;
        this.totalPrice = totalPrice; // unique & string
        this.items = items; // list of objects where object is of cartItem class
    }
}

export default Cart;
