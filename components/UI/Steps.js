import React from 'react';
import { Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Steps = props => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15 }}>
            <View style={{ flex: 0.15 }}>
                <Icon name={props.icon} size={34} color={'#bab5b5'} />
            </View>

            <View style={{ flex: 0.85 }}>
                <View style={{ marginBottom: 5 }}>
                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16, letterSpacing: -0.2 }}>
                        {props.title}
                    </Text>
                </View>
                <View>
                    <Text style={{ color: 'grey' }} numberOfLines={2} adjustsFontSizeToFit={true}>
                        {props.description}
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default Steps;
