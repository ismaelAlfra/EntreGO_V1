import React, { Component } from 'react';

import { ScrollView, View, TouchableOpacity, Text, Image, TextInput } from 'react-native';
import EstilosEntreGO from './EstilosEntreGO';
import Logo from './library/Logo';
import MyButton from './library/MyButton';

export default class Welcome extends Component {
    render() {
        return (
            <View style={EstilosEntreGO.fundo}>
                <View style={{ flex: 3 }}>
                    <Image style={{ width: 150, height: 150, resizeMode: 'contain', top: -7 }}
                        source={require('../assets/images/arranjo_04.png')} />
                </View>
                <Logo></Logo>
                <View style={{ height: 'auto', width: '100%', alignItems: 'center' }}>
                    <View style={{ width: '70%' }}>
                        <Text style={EstilosEntreGO.textTop}>Email</Text>
                    </View>
                    <TextInput style={EstilosEntreGO.myInput}></TextInput>
                    <View style={{ width: '70%' }}>
                        <Text style={EstilosEntreGO.textTop}>Senha</Text>
                    </View>
                    <TextInput style={EstilosEntreGO.myInput}></TextInput>
                </View>
                <View style={{ margin: 30 }}>
                    <MyButton>Entrar</MyButton>
                </View>
                <TouchableOpacity style={{alignItems: 'center'}}>
                    <Text style={EstilosEntreGO.textTop}>
                        Cadastre-se
                    </Text>
                </TouchableOpacity>

                <View style={{ flex: 3, flexDirection: 'column-reverse' }}>
                    <Image style={{
                        width: 120, height: 120, resizeMode: 'contain',
                        right: -275, bottom: 20,
                        transform: [{ rotate: '180deg' }]
                    }}
                        source={require('../assets/images/arranjo_03.png')} />
                </View>
            </View>
        )
    }
}