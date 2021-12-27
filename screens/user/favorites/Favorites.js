import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealList from '../../../components/user/favorites/MealList';
import colors from '../../../constants/colors';

const Favorites = props => {

    const favMeals = [
        { id: 0, title: 'Foods', imageUrl: 'https://media.istockphoto.com/photos/foods-high-in-zinc-picture-id1289940519?b=1&k=20&m=1289940519&s=170667a&w=0&h=u5BwIDikkJCxrQQopgYHW2rOi7XBmG3JOHJJvYIE2C0=', price: 23, category: 'Fats free' },
        { id: 1, title: 'Dinner', imageUrl: 'https://media.istockphoto.com/photos/thanksgiving-party-table-setting-traditional-holiday-stuffed-turkey-picture-id1268544544?b=1&k=20&m=1268544544&s=170667a&w=0&h=J5F56fvQ8jeuUG4HRs3Ngj0g6JBooX0pCq8UVMMKMf4=', price: 500, category: 'Lactose free' },
    ];

    if (favMeals.length == 0 || !favMeals) {
        return (
            <View style={styles.content}>
                <Text style={{ fontFamily: 'italic', fontSize: 18 }} adjustsFontSizeToFit={true} numberOfLines={1}>
                    No Favorite meals found. Start adding some!
                </Text>
            </View>
        )
    }

    return <MealList listData={favMeals} />
}

export default Favorites;

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secondary
    }
});
