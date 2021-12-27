import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import colors from '../../constants/colors';

const HeaderButton = props => {
    return (
        <TouchableOpacity style={{ paddingLeft: 19, paddingRight: 7, height: '100%', justifyContent: 'center' }} onPress={() => props.cart ? console.log('CartPressed') : props.navigation.openDrawer()}>
            {props.cart ? (
                <Ionicons name={'md-cart'} color={colors.primary} size={28} style={{ left: -5 }} />
            ) : (
                <MaterialIcons size={28} color={'black'} name={'keyboard-arrow-left'} />
            )}
        </TouchableOpacity>
    );
}

export default HeaderButton;
