import React, { Component } from 'react';

import { ScrollView, View, TouchableOpacity, Text, Image, TextInput } from 'react-native';
import EstilosEntreGO from './EstilosEntreGO';
import Logo from './library/Logo';
import MyButton from './library/MyButton';

export default class Categoria extends Component {
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    };
    render() {
        return (
            <View style={EstilosEntreGO.fundo}>
                <View style={{ flex: 3 }}>
                    <Image style={{ width: 150, height: 150, resizeMode: 'contain', top: -7 }}
                        source={require('../assets/images/arranjo_04.png')} />
                </View>
                <Logo></Logo>
                <TouchableOpacity style={EstilosEntreGO.button} onPress={()=>this.props.navigation.navigate('Home')}>
                    <Text style={EstilosEntreGO.textButton}>
                        Logista
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={EstilosEntreGO.button} onPress={()=>this.props.navigation.navigate('ListarEntregas')}>
                    <Text style={EstilosEntreGO.textButton}>
                        Entregador
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={EstilosEntreGO.button} onPress={()=>this.props.navigation.navigate('HomeConsumidor')}>
                    <Text style={EstilosEntreGO.textButton}>
                        Consumidor
                    </Text>
                </TouchableOpacity>

                <View style={{ flex: 3, flexDirection: 'column-reverse' }}>
                    <Image style={{
                            width: 120, height: 120, resizeMode: 'contain',
                            right: -295, bottom: 20,
                            transform: [{ rotate: '180deg' }]
                        }}
                        source={require('../assets/images/arranjo_03.png')} />
                </View>
            </View>
        )
    }
}