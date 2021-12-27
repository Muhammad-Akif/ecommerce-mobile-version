import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const HeaderButton = props => {
    return (
        <TouchableOpacity style={{ left: 19, marginRight: 27 }} onPress={() => props.navigation.openDrawer()}>
            <MaterialIcons size={28} color={'black'} name={'keyboard-arrow-left'} />
        </TouchableOpacity>
    );
}

export default HeaderButton;
