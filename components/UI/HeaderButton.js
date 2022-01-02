import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import colors from '../../constants/colors';
import NumberBadge from './NumberBadge';

const HeaderButton = props => {
    return (
        <TouchableOpacity style={{ paddingLeft: 19, paddingRight: 7, height: '100%', justifyContent: 'center' }} onPress={() => props.cart ? props.navigation.navigate('Cart') : props.navigation.openDrawer()}>
            {props.cart ? (
                <>
                    <Ionicons name={'md-cart'} color={colors.primary} size={28} style={{ left: -5 }} />
                    {
                        props.text != 0 && <NumberBadge text={props.text} />
                    }
                </>
            ) : (
                <MaterialIcons size={28} color={'black'} name={'keyboard-arrow-left'} />
            )}
        </TouchableOpacity>
    );
}

export default HeaderButton;
