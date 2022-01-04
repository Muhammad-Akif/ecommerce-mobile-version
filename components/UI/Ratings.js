import { View } from 'react-native';
import React from 'react';
import { Rating } from 'react-native-ratings';

const Ratings = props => {
    // const [rating, set]
    return (
        <View>
            <Rating
            showRating={true}
                onFinishRating={(rating) => {
                    props.onRate(props.id, props.category, JSON.stringify(rating))
                }}
                style={{ paddingVertical: 10 }}
            />
        </View>
    )
}

export default Ratings;
