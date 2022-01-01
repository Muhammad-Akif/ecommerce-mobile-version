class CartItem {
    constructor(id, name, detail, price, category, quantity, totalPrice) {
        this.id = id; // unique & number
        this.name = name; // string
        this.detail = detail; //string
        this.price = price; // float
        this.category = category; // string
        this.quantity = quantity; // number
        this.totalPrice = totalPrice; // float
    }
}

export default CartItem;
