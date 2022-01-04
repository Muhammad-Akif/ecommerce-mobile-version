import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealList from '../../../components/user/favorites/MealList';
import colors from '../../../constants/colors';
import { useEcommerceContext } from '../../../contexts/ContextProvider';

const Favorites = props => {

    const { auth, favoriteItems } = useEcommerceContext();

    const favMeals = favoriteItems.filter(item => item.username == auth.loginUserInfo.username);

    if (favMeals.length == 0 || !favMeals) {
        return (
            <View style={styles.content}>
                <Text style={{ fontFamily: 'italic', fontSize: 18 }} adjustsFontSizeToFit={true} numberOfLines={1}>
                    No Favorite meals found. Start adding some!
                </Text>
            </View>
        )
    }

    return <MealList listData={favMeals} navigation={props.navigation} />
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
