class weeklyDeals {
    constructor(id, name, detail, price, uri, quantity, off) {
        this.id = id; // unique & number
        this.name = name; // string
        this.detail = detail; //string
        this.price = price; // float | real price
        this.uri = uri;
        this.quantity = quantity;
        this.off = off; // string
    }
}

export default weeklyDeals;
