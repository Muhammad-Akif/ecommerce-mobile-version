class Order {
    constructor(id, username, startDate, price, deliveryTime, status, items) {
        this.id = id;
        this.username = username;
        this.startDate = startDate; // unique & number
        this.price = price; // float
        this.deliveryTime = deliveryTime; // string | not defined yet
        this.status = status; //string | picked | delivered | not picked yet
        this.items = items; // list of object where object is of cartItem class.
    }
}

export default Order;
