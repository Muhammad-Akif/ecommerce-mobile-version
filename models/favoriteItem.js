class favoriteItem {
    constructor(username, id, name, detail, price, uri, category, ratings) {
        this.username = username;
        this.id = id; // unique & number
        this.name = name; // string
        this.detail = detail; //string
        this.price = price; // float
        this.uri = uri; // string
        this.category = category;
        this.ratings = ratings; //list of objects where object is of Rating Class.
    }
}

export default favoriteItem;
