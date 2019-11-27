import React, { Component, TextInput } from 'react';

import { ScrollView, View, TouchableOpacity, Text, Image } from 'react-native';
import EstilosEntreGO from './EstilosEntreGO';
import Container from './library/Container';
import Title from './library/Title';
import MyButton from './library/MyButton';
import Card from './library/Card';

export default class ListarEntregas extends Component {

    render(){
        return(
            <ScrollView style={EstilosEntreGO.fundo}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={'placeholder'}
                    value={'placeholder'}
                />
                <View style={{ marginTop: 20, height: 'auto'}}>
                <Title>Lista de entregas disponíveis</Title>
                    <Container>
                        <Card cliente='Fulano' encomenda='Caneta Azul'></Card>
                        <Card cliente='Fulano' encomenda='Caneta Azul'></Card>
                        <Card cliente='Fulano' encomenda='Caneta Azul'></Card>
                        <Card cliente='Fulano' encomenda='Caneta Azul'></Card>
                        <Card cliente='Fulano' encomenda='Caneta Azul'></Card>
                        <Card cliente='Fulano' encomenda='Caneta Azul'></Card>
                        <Card cliente='Fulano' encomenda='Caneta Azul'></Card>
                        <Card cliente='Fulano' encomenda='Caneta Azul'></Card>
                    </Container>
                </View>
            </ScrollView>
        )
    }
}