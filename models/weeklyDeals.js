class weeklyDeals {
    constructor(category, id, name, detail, price, uri, ratings, discountPrice, off) {
        this.category = category; // string
        this.id = id; // unique & number
        this.name = name; // string
        this.detail = detail; //string
        this.price = price; // float | real price
        this.uri = uri;
        this.ratings = ratings; //list of objects [{ email: 'abc2', username: 'abc2', password: 'abc2', rating: 5, desc: 'Good Item' }]
        this.discountPrice = discountPrice; // number
        this.off = off; // string
    }
}

export default weeklyDeals;
