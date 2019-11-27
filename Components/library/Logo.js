import React, { Component } from 'react';

import { View, Image } from 'react-native';

export default class Logo extends Component {
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: 270, height: 200, resizeMode: 'contain'}}
                    source={require('../../assets/images/EntreGO_Azul.png')} />
            </View>
        )
    }
}