class Order {
    constructor(id, username, startDate, price, deliveryTime, status, items, address) {
        this.id = id;
        this.username = username;
        this.startDate = startDate; // unique & number
        this.price = price; // float
        this.deliveryTime = deliveryTime; // string | not defined yet
        this.status = status; //string | picked | delivered | not picked yet | rated
        this.items = items; // list of object where object is of cartItem class.
        this.address = address;
    }
}

export default Order;
