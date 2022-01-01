import Category from '../models/category';
import Item from '../models/item';
import Rating from '../models/rating';

const items = [
    new Category(
        'Fruit/veg/salads',
        [
            new Item(
                1,
                'Avacado',
                'Very expensive and sweet fruit',
                200,
                [
                    new Rating(
                        'rafeh@gmail.com',
                        'shikari',
                        'asddonasd',
                        4,
                        'Good Product!'
                    ),
                    new Rating(
                        'rafeh@gmail.com',
                        'shikari',
                        'asddonasd',
                        4,
                        'Good Product!'
                    )
                ]
            )
        ]
    ),
    new Category(
        'Dairy'
    ),
    new Category(
        'Fresh meat'
    ),
    new Category(
        'Ambient bakery'
    )
]