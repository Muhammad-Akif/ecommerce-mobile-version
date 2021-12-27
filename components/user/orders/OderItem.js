import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
import Button from '../../UI/Button';
import CartItem from './CartItem';

const OrderItem = props => { // inprogress

    const [isShowDetail, setIsShowDetail] = useState(false)

    return (
        <View style={styles.item}>
            <View style={styles.firstRow}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.totalAmount} adjustsFontSizeToFit={true} numberOfLines={1}>${props.amount.toFixed(2)}</Text>
                </View>
                <View style={{ backgroundColor: colors.lightGrey, top: -1, width: 70, height: 15, alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
                    <Text style={{ fontSize: 10, fontFamily: 'bold', color: 'grey' }} adjustsFontSizeToFit={true} numberOfLines={1}>
                        {
                            props.inprogress ? 'IN PROGRESS' : 'COMPLETED'
                        }
                    </Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Text style={styles.date} adjustsFontSizeToFit={true} numberOfLines={1}>{props.date}</Text>
                </View>
            </View>
            <Button
                normalText
                textStyle={{ fontWeight: 'normal', fontSize: 13 }}
                style={{ width: '35%', height: 30 }}
                title={isShowDetail ? 'HIDE DETAILS' : 'SHOW DETAILS'}
                onPress={() => setIsShowDetail(prevState => !prevState)}
            />

            {isShowDetail && <View style={styles.detailSection}>
                {props.items.map(order =>
                    <CartItem
                        key={order.productId}
                        quantity={order.quantity}
                        title={order.productTitle}
                        price={order.sum} />
                )}
            </View>}
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