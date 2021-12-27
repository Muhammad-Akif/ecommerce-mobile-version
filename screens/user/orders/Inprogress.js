import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import OrderItem from '../../../components/user/orders/OderItem';

const Inprogress = props => {
    return (
        <View style={style.screen}>
            <ScrollView>
                <OrderItem
                    inprogress
                    amount={4220}
                    date={'23 Aug'}
                    items={[
                        { productId: 1, quantity: 4, productTitle: 'Raita', sum: '50$' },
                        { productId: 2, quantity: 5, productTitle: 'Salad', sum: '230$' },
                        { productId: 3, quantity: 1, productTitle: 'Dahi', sum: '233$' },
                        { productId: 4, quantity: 2, productTitle: 'Mango', sum: '213$' },
                        { productId: 5, quantity: 3, productTitle: 'banana', sum: '323$' },
                    ]}
                />
                <OrderItem
                    inprogress
                    amount={430}
                    date={'12 Nov'}
                    items={[
                        { productId: 2323, quantity: 2, productTitle: 'Potato', sum: '100$' }
                    ]}
                />
            </ScrollView>
        </View>
    );
}

export default Inprogress;

const style = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 20
    }
})
