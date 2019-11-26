import React, { Component } from 'react';

import { ScrollView, View, TouchableOpacity, Text, Image } from 'react-native';
import EstilosEntreGO from './EstilosEntreGO';
import Logo from './library/Logo';
import MyButton from './library/MyButton';

export default class Welcome extends Component {
    render() {
        return (
            <View style={EstilosEntreGO.fundo}>
                <View style={{ flex: 3 }}>
                    <Image style={{ width: 150, height: 150, resizeMode: 'contain', right: 18 }}
                        source={require('../assets/images/arranjo_01.png')} />
                </View>
                <Logo></Logo>
                <View style={{ height: 'auto', width: '100%', alignItems: 'center' }}>
                    <View style={{ width: '80%' }}>
                        <Text style={EstilosEntreGO.textExpli}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec enim dui, tempus non tortor et, cursus maximus magna.
                            Vestibulum sollicitudin molestie urna id auctor.
                            Morbi placerat purus non porta porta. Aliquam sed ex non felis
                            ultricies ullamcorper id sed felis. Praesent nisl sapien,
                            viverra commodo sem at, pharetra auctor urna.

                        </Text>
                    </View>
                </View>
                <View style={{ margin: 30 }}>
                    <MyButton>Avançar</MyButton>
                </View>

                <View style={{ flex: 3, flexDirection: 'column-reverse' }}>
                    <Image style={{ width: 120, height: 120, resizeMode: 'contain', right: -275, bottom: 25 }}
                        source={require('../assets/images/arranjo_02.png')} />
                </View>
            </View>
        )
    }
}