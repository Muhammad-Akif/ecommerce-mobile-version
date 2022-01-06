import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
import { useEcommerceContext } from '../../../contexts/ContextProvider';
import checkAndWriteFile from '../../../functions/checkAndWriteFile';
import Rating from '../../../models/rating';
import Badge from '../../UI/Badge';
import Button from '../../UI/Button';
import Ratings from '../../UI/Ratings';
import CartItem from './CartItem';
import CountDown from 'react-native-countdown-component';
import getDifferenceInSeconds from '../../../functions/getTimeInSeconds';
import getDifferenceInDays from '../../../functions/getDifferenceInDays';

const OrderItem = props => { // inprogress
    let times;
    if (props.order) {
        times = getDifferenceInDays(new Date(props.order.startDate), new Date()) <= 1.1 ? getDifferenceInSeconds(new Date(props.order.deliveryTime), new Date()) : 0
    }

    const [time, setTime] = useState(times);

    const { items, setItems, allData, setAllData, orders, setOrders, auth } = useEcommerceContext();

    const [ratings, setRatings] = useState([]); // [{id, category, rating}]

    const onRate = async (id, category, rating) => {
        console.log(id, category, rating);
        const newRatings = ratings.filter(rate => (rate.id != id && rate.category != category));
        setRatings([
            ...newRatings,
            {
                id,
                category,
                rating
            }
        ])
    }

    const submitReview = async () => { //ratings
        const dupItems = { ...items };
        const dupOrders = [...orders];

        // dupItems.categories.name;

        ratings.forEach(rating => {
            try {
                const cactegoryIndex = dupItems.categories.findIndex(cat => cat.name == rating.category);
                const itemIndex = dupItems.categories[cactegoryIndex].items.findIndex(item => item.id == rating.id);
                dupItems.categories[cactegoryIndex].items[itemIndex].ratings.push(new Rating(auth.loginUserInfo.email, auth.loginUserInfo.username, auth.loginUserInfo.password, rating.rating))
            } catch (err) {

            }
        })

        const orderIndex = dupOrders.findIndex(order => order.id == props.order.id);
        dupOrders[orderIndex].status = 'rated';

        setOrders(dupOrders);
        setItems(dupItems);

        const newData = {
            ...allData,
            items: dupItems,
            orders: dupOrders
        }

        setAllData(newData);

        await checkAndWriteFile(newData);

    }

    const [isShowDetail, setIsShowDetail] = useState(false)

    return (
        <View style={styles.item}>
            {
                props.isAdmin && (
                    <View style={styles.firstRow}>
                        <Button
                            normalText
                            whiteTheme
                            textStyle={{ fontWeight: 'normal', fontSize: 13 }}
                            style={{ width: '35%', height: 30, borderWidth: 0.2, borderColor: colors.primary }}
                            title={'Picked'}
                            onPress={props.handlePick}
                        />
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text numberOfLines={1} style={{ fontFamily: 'italic' }}>{props.username}</Text>
                        </View>
                        <Button
                            whiteTheme
                            normalText
                            textStyle={{ fontWeight: 'normal', fontSize: 13 }}
                            style={{ width: '35%', height: 30, borderWidth: 0.2, borderColor: colors.primary }}
                            title={'Delivered'}
                            onPress={props.handleDeliver}
                        />
                    </View>
                )
            }

            <View style={{ ...styles.firstRow, marginBottom: props.isAdmin ? 0 : 15 }}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.totalAmount} adjustsFontSizeToFit={true} numberOfLines={1}>${props.amount.toFixed(2)}</Text>
                </View>
                <Badge text={props.isAdmin ? props.status : props.inprogress ? props.status.toUpperCase() : props.status.toUpperCase()} style={{ width: props.status == 'not picked yet' ? 90 : 70 }} />
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Text style={styles.date} adjustsFontSizeToFit={true} numberOfLines={1}>{props.date}</Text>
                </View>
            </View>
            {
                props.isAdmin && (
                    <View style={{ marginVertical: 6, width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <View style={{flex: 0.7}}>
                            <Text style={{ fontFamily: 'text-bold' }}>User Address: </Text>
                        </View>
                        <View style={{flex: 0.3}}>
                            <Text style={{ fontFamily: 'italic' }} numberOfLines={3} adjustsFontSizeToFit={true}>{props.address}</Text>
                        </View>
                    </View>
                )
            }

            {
                props.status != 'rated' && (
                    <>
                        {
                            props.inprogress && !props.isAdmin && (
                                <CountDown
                                    until={time}
                                    onFinish={() => alert('I hope you received your Order')}
                                    size={20}
                                    timeLabelStyle={{}}
                                />
                            )
                        }
                        <Button
                            normalText
                            textStyle={{ fontWeight: 'normal', fontSize: 13 }}
                            style={{ width: '35%', height: 30 }}
                            title={props.inprogress ? (isShowDetail ? 'HIDE DETAILS' : 'SHOW DETAILS') : (isShowDetail ? 'Close' : 'Rate Items')}
                            onPress={() => setIsShowDetail(prevState => !prevState)}
                        />
                    </>
                )
            }

            {isShowDetail && props.status != 'rated' && <View style={styles.detailSection}>
                {props.items.map(order => {

                    if (!props.inprogress) {
                        return (
                            <View key={order.id}>
                                <CartItem
                                    key={order.id}
                                    quantity={order.quantity}
                                    title={order.name}
                                    price={order.totalPrice} />
                                <Ratings onRate={onRate} id={order.id} category={order.category} />
                            </View>
                        )
                    }
                    return (
                        <CartItem
                            key={order.id}
                            quantity={order.quantity}
                            title={order.name}
                            price={order.totalPrice} />
                    )
                })}
            </View>}
            {
                (isShowDetail && !props.inprogress && props.status != 'rated') && (
                    <Button
                        normalText
                        textStyle={{ fontWeight: 'normal', fontSize: 13 }}
                        style={{ width: '35%', height: 30, alignSelf: 'flex-end', marginVertical: 5 }}
                        title={'Submit'}
                        onPress={submitReview}
                    />
                )
            }
        </View>
    );
}

export default OrderItem;

const styles = StyleSheet.create({
    item: {
        margin: 20,
        padding: 10,
        alignItems: 'center',
        backgroundColor: colors.secondary,
        borderRadius: 10,
        elevation: 4
    },
    firstRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15
    },
    totalAmount: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        color: 'black'
    },
    date: {
        fontSize: 16,
        fontFamily: 'open-sans',
        color: 'black'
    },
    detailSection: {
        marginTop: 5,
        width: '100%'
    }
});