import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
import Badge from '../../UI/Badge';
import Button from '../../UI/Button';
import CartItem from './CartItem';

const OrderItem = props => { // inprogress

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

            <View style={styles.firstRow}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.totalAmount} adjustsFontSizeToFit={true} numberOfLines={1}>${props.amount.toFixed(2)}</Text>
                </View>
                <Badge text={props.isAdmin ? props.status : props.inprogress ? props.status.toUpperCase() : 'DELIVERED'} style={{ width: props.status == 'not picked yet' ? 90 : 70 }} />
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
                        key={order.id}
                        quantity={order.quantity}
                        title={order.name}
                        price={order.totalPrice} />
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