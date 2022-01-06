import React from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import OrderItem from '../../../components/user/orders/OderItem';
import colors from '../../../constants/colors';
import { useEcommerceContext } from '../../../contexts/ContextProvider';
import checkAndWriteFile from '../../../functions/checkAndWriteFile';

const ManageOrders = props => {

    const { allData, setAllData, orders, setOrders } = useEcommerceContext();
    const userOrders = orders.filter(order => order.status != 'delivered' && order.status != 'rated');

    const handlePick = async id => {
        const newOrders = [...orders];
        const orderIndex = newOrders.findIndex(order => order.id == id);

        newOrders[orderIndex].status = 'picked';


        const newData = {
            ...allData,
            orders: newOrders
        }

        setOrders(newOrders);
        setAllData(newData);
        await checkAndWriteFile(newData)

    }

    const handleDeliver = async id => {
        const newOrders = [...orders];
        const orderIndex = newOrders.findIndex(order => order.id == id);

        newOrders[orderIndex].status = 'delivered';


        const newData = {
            ...allData,
            orders: newOrders
        }

        setOrders(newOrders);
        setAllData(newData);
        await checkAndWriteFile(newData)

    }

    return (
        <View style={styles.screen}>
            <View style={{ marginTop: '4%', paddingHorizontal: 50, height: '7%' }}>
                <Text style={{ fontSize: 35, fontWeight: 'bold' }} numberOfLines={1} adjustsFontSizeToFit={true}>
                    Manage Orders
                </Text>
            </View>

            <ScrollView>
                {
                    userOrders.map((item, index) => (
                        <OrderItem
                            isAdmin={true}
                            key={index}
                            inprogress
                            amount={item.price}
                            date={new Date(item.startDate).toDateString()}
                            items={item.items}
                            status={item.status}
                            handlePick={handlePick.bind(null, item.id)}
                            handleDeliver={handleDeliver.bind(null, item.id)}
                            username={item.username}
                            address={item.address}
                        />
                    ))
                }
                {
                    userOrders.length == 0 && (
                        <View style={{ width: '100%', alignItems: 'center', marginTop: '50%' }}>
                            <Text style={{ fontFamily: 'italic', fontSize: 18 }}>
                                No orders yet to Manage!
                            </Text>
                        </View>
                    )
                }
            </ScrollView>
        </View>
    );
}

export default ManageOrders;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.offWhite,
        height: '100%'
    },
    Acard: {
        marginVertical: 20,
        marginHorizontal: 9,
        backgroundColor: colors.secondary,
        padding: 15,
        elevation: 10,
        width: 160,
        borderRadius: 15,
    },
    button: {
        backgroundColor: colors.secondary,
        height: 30,
        width: "50%",
        borderRadius: 5,
        borderWidth: 0.8,
        marginHorizontal: -5,
        marginTop: 5,
        borderColor: "gray",
        justifyContent: 'center',
        alignItems: 'center'
    },
    childViewTextStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})