import React, { Component } from 'react';

import { ScrollView, View, TouchableOpacity, Text, Image, TextInput } from 'react-native';
import EstilosEntreGO from './EstilosEntreGO';
import Container from './library/Container';
import Title from './library/Title';
import MyButton from './library/MyButton';
import Card from './library/Card';

export default class ListarEntregas extends Component {
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    };
    render(){
        return(
            <ScrollView style={EstilosEntreGO.fundo}>
                <TextInput
                    style={{
                        margin:'5%',
                        backgroundColor: 'white',
                        width: '90%',
                        height: 'auto',
                        borderRadius: 7,
                        fontFamily: 'Manjari-Regular'
                    }}
                    onChangeText={()=>{}}
                    value={'Digite o código da entrega'}
                />
                <View style={{ marginTop: 20, height: 'auto'}}>
                <Title>Lista de entregas disponíveis</Title>
                    <ScrollView style={{
                        padding: 30,
                        backgroundColor: 'white',
                        width: 'auto',
                        height: 450, 
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        margin: 20,
                        marginTop: 0
                    }}>
                        <Card cliente='Fulano' encomenda='Caneta Azul'></Card>
                        <Card cliente='Fulano' encomenda='Caneta Azul'></Card>
                        <Card cliente='Fulano' encomenda='Caneta Azul'></Card>
                        <Card cliente='Fulano' encomenda='Caneta Azul'></Card>
                        <Card cliente='Fulano' encomenda='Caneta Azul'></Card>
                        <Card cliente='Fulano' encomenda='Caneta Azul'></Card>
                        <Card cliente='Fulano' encomenda='Caneta Azul'></Card>
                        <Card cliente='Fulano' encomenda='Caneta Azul'></Card>
                    </ScrollView>
                </View>
            </ScrollView>
        )
    }
}