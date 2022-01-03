import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem';
import propTypes from 'prop-types';

const MealList = props => {

    const renderMealItem = itemData => {
        return <MealItem
            title={itemData.item.name}
            image={itemData.item.uri}
            price={itemData.item.price}
            details={itemData.item.detail}
            fullInfo={itemData.item}
            navigation={props.navigation} />
    }

    return (
        <View style={styles.list}>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={props.listData}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </View>
    );
}

MealList.propTypes = {
    listData: propTypes.array,
    navigation: propTypes.object
}

export default MealList;

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
