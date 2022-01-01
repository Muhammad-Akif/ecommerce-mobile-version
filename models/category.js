class Category {
    constructor(name, items, lastId) {
        this.name = name; // unique & string
        this.items = items; // list of objects where object is of item class
        this.lastId = lastId;
    }
}

export default Category;
