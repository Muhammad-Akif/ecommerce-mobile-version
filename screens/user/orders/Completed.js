import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import OrderItem from '../../../components/user/orders/OderItem';
import { useEcommerceContext } from '../../../contexts/ContextProvider';

const Completed = props => {

    const { allData, setAllData, orders, setOrders, auth } = useEcommerceContext();
    const userOrders = orders.filter(order => (order.username == auth.loginUserInfo.username && order.status == 'delivered'));

    return (
        <View style={style.screen}>
            <ScrollView>
                {
                    userOrders.map((item, index) => (
                        <OrderItem
                            key={index}
                            amount={item.price}
                            date={new Date(item.startDate).toDateString()}
                            items={item.items}
                        />
                    ))
                }
            </ScrollView>
        </View>
    );
}

export default Completed;

const style = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 20
    }
})
