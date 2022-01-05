import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import OrderItem from '../../../components/user/orders/OderItem';
import { useEcommerceContext } from '../../../contexts/ContextProvider';

const Inprogress = props => {

    const { orders, auth } = useEcommerceContext();
    const userOrders = orders.filter(order => (order.username == auth.loginUserInfo.username && order.status != 'delivered' && order.status != 'rated'));

    return (
        <View style={style.screen}>
            <ScrollView>
                {
                    userOrders.map((item, index) => (
                        <View key={index}>
                            <OrderItem
                                key={index}
                                inprogress
                                amount={item.price}
                                date={new Date(item.startDate).toDateString()}
                                items={item.items}
                                order={item}
                                status={item.status}
                            />
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    );
}

export default Inprogress;

const style = StyleSheet.create({
    screen: {
        flex: 1
    }
})
