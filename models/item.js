class Item {
    constructor(id, name, detail, price, ratings) {
        this.id = id; // unique & number
        this.name = name; // string
        this.detail = detail; //string
        this.price = price; // float
        this.ratings = ratings; //list of objects [{ email: 'abc2', username: 'abc2', password: 'abc2', rating: 5, desc: 'Good Item' }]
    }
}

export default Item;
