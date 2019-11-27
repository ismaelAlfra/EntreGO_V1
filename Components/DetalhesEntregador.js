import React, { Component } from 'react';

import { ScrollView, View, TouchableOpacity, Text, Image } from 'react-native';
import EstilosEntreGO from './EstilosEntreGO';
import Container from './library/Container';
import Title from './library/Title';
import MyButton from './library/MyButton';
import {ruan} from '../ruan';

export default class DetalhesEntregador extends Component {
    render(){
        return(
            <ScrollView style={EstilosEntreGO.fundo}>
                <View style={{ marginTop: 20, height: 'auto'}}>
                    <Title>Detalhes do Entregador</Title>
                    <View style={EstilosEntreGO.containerAuto}>
                        <View style={{alignItems: 'center', width: '100%'}}>
                            <View style={EstilosEntreGO.container}>
                                <Image style={{width: 80, height: 80, marginRight:20}}
                                source={require('../assets/images/usericonpng.png')}/>
                                <View style={{ maxWidth: 220 }}>
                                    <Text style={EstilosEntreGO.text}>Ismael Almeida Fragoso</Text>
                                    <Text style={EstilosEntreGO.text}>Lojas Alfra</Text>
                                    <Text style={EstilosEntreGO.text}>Rua Estudante Antônio Brito 828</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 30 }}>
                            <View style={{ width: '100%' }}>
                                <Text style={EstilosEntreGO.textTop}>Meio de transporte utilizado</Text>
                            </View>
                            <View style={EstilosEntreGO.myDados}>
                                <Text>
                                    Ônibus
                                </Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 0 }}>
                            <View style={{ width: '100%' }}>
                                <Text style={EstilosEntreGO.textTop}>Local de transporte da entrega</Text>
                            </View>
                            <View style={EstilosEntreGO.myDados}>
                                <Text>
                                    Mochila
                                </Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 0 }}>
                            <View style={{ width: '100%' }}>
                                <Text style={EstilosEntreGO.textTop}>Chega no destino</Text>
                            </View>
                            <View style={EstilosEntreGO.myDados}>
                                <Text>
                                    27/11 às 21:00h
                                </Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 0 }}>
                            <View style={{ width: '100%' }}>
                                <Text style={EstilosEntreGO.textTop}>Preço</Text>
                            </View>
                            <View style={EstilosEntreGO.myDados}>
                                <Text>
                                    R$ 20,00
                                </Text>
                            </View>
                        </View>
                        <MyButton> Chat </MyButton>
                        <MyButton> Avançar </MyButton>
                    </View>
                </View>
            </ScrollView>
        )
    }
}