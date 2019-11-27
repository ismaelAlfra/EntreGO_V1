import React, { Component } from 'react';

import { ScrollView, View, TouchableOpacity, Text, Image } from 'react-native';
import EstilosEntreGO from './EstilosEntreGO';
import Logo from './library/Logo';
import MyButton from './library/MyButton';

export default class Welcome extends Component {
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    };
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
                        Olá, bem-vindo ao EntreGÔ, uma ferramenta que vai ajudar você logista a tornar suas entregas mais eficientes, seguras e práticas, que vai ajudar você viajante a ter uma renda extra a partir das suas viagens, e que vai ajudar você cliente a ter um acompanhamento melhor das suas encomendas.

                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={EstilosEntreGO.button} onPress={()=>this.props.navigation.navigate('Categoria')}>
                    <Text style={EstilosEntreGO.textButton}>
                        Avançar
                    </Text>
                </TouchableOpacity>

                <View style={{ flex: 3, flexDirection: 'column-reverse' }}>
                    <Image style={{ width: 120, height: 120, resizeMode: 'contain', right: -295, bottom: 25 }}
                        source={require('../assets/images/arranjo_02.png')} />
                </View>
            </View>
        )
    }
}